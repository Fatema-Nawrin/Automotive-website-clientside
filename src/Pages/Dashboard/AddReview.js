import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
  const [user] = useAuthState(auth);
  const handleReview = (event) => {
    event.preventDefault();
    const reviews = {
      name: user.displayName,
      review: event.target.review.value,
      ratings: event.target.ratings.value,
    };

    if (reviews.ratings) {
      fetch('https://public-rozella-fatema.koyeb.app/reviews', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(reviews),
      })
        .then((res) => res.json())
        .then((data) => {
          toast('Thanks for the review');
        });
    } else {
      toast.error('Please write your review');
    }

    event.target.reset();
  };
  return (
    <div className="px-4 lg:px-2 py-4 ">
      <h2 className="text-xl md:text-2xl text-secondary">Rate and Review</h2>
      <p className="py-4 lg:pr-28">
        We always love to know about buyers opinion about our products and overall experience about buying and shipping. So, leave a review here and tell us about the experience of
        buying from Blackstone Automotive.
      </p>

      <form className="grid grid-cols-1 gap-2" onSubmit={handleReview}>
        <label className="font-semibold text-lg">Rate Your Experience</label>
        <input className="input input-bordered input-primary border-2 w-full max-w-xs" type="number" name="ratings" min={1} max={5} placeholder="Number of ratings" />

        <label className="font-semibold text-lg">Write Your Review</label>
        <textarea type="text" placeholder="Write here" className="input input-bordered input-primary border-2 h-40  w-full max-w-xs" name="review" />

        <input type="submit" className="btn btn-primary mt-2 border-2 w-full max-w-xs" value="Submit review" />
      </form>
    </div>
  );
};

export default AddReview;
