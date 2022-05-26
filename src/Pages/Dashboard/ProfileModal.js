import React from 'react';
import { toast } from 'react-toastify';

const ProfileModal = ({ email, refetch }) => {
    const handleUpdate = (event) => {
        event.preventDefault();
        const updateInfo = {
            education: event.target.education.value,
            phone: event.target.phone.value,
            location: event.target.location.value,
            linkedin: event.target.linkedin.value
        }
        fetch(`http://localhost:5000/usersinfo/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast('Your profile is updated.')
                refetch()
            })

        event.target.reset()
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="modal-action">
                        <label for="my-modal-6" className="btn">X</label>
                    </div>
                    <div className='mx-auto w-full max-w-xs'>
                        <form className='grid grid-cols-1 gap-2' onSubmit={handleUpdate}>

                            <label className='font-semibold'>Education</label>
                            <input className="input input-bordered input-primary" placeholder='Education' type="text" name="education" />

                            <label className='font-semibold'>Location</label>
                            <input placeholder='Location' className="input input-bordered input-primary  border-2   " type="text" name="location" />

                            <label className='font-semibold'>Phone No</label>
                            <input placeholder='Phone no' className="input input-bordered input-primary  border-2   " type="text" name="phone" />
                            <label className='font-semibold'>Linkedin Profile</label>
                            <input placeholder='Profile' className="input input-bordered input-primary  border-2" type="url" name="linkedin" />

                            <input type="submit" className='btn btn-primary mt-2 border-2' value="Update" />
                        </form>

                    </div>



                </div>
            </div>
        </div>
    );
};

export default ProfileModal;