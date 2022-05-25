import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Booking = ({ product }) => {
    const { _id, name, minimumQuantity, stock } = product;
    const [user] = useAuthState(auth);
    const [input, setInput] = useState(minimumQuantity);
    const [disablevalue, setDisablevalue] = useState(false)
    const handleChange = e => {
        setInput(e.value);
        setDisablevalue(false)
    }
    const handleBooking = event => {
        event.preventDefault();
        const orderQuantity = parseInt(event.target.quantity.value);
        if (orderQuantity < minimumQuantity || orderQuantity > stock) {
            setDisablevalue(true);
            toast.error(`Select an amount between ${minimumQuantity} and ${stock} to order the product`);
        }
        else {
            const booking = {
                bookingId: _id,
                product: name,
                buyer: user.displayName,
                buyerEmail: user.email,
                phone: event.target.phone.value,
                address: event.target.address.value,
                orderQuantity
            }
            fetch('https://fierce-fortress-97663.herokuapp.com/bookings', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
                .then(res => res.json())
                .then(data => {
                    toast('Your order is booked.')
                })

            event.target.reset()
        }
    }
    return (

        <div className='my-16 flex flex-col items-center'>
            <h2 className=' text-xl lg:text-2xl mb-5'>Order Details</h2>
            <p className='my-4 md:text-lg'>Please, fill up the rest of the form with necessary information to place your order.</p>
            <div className='mx-auto w-full max-w-xs'>
                <form className='grid grid-cols-1 gap-2' onSubmit={handleBooking}>
                    <label className='font-semibold'>Product</label>
                    <input disabled className="input input-bordered input-primary rounded-none " type="text" name="product" value={name} />
                    <label className='font-semibold'>Name</label>
                    <input className="input input-bordered rounded-none " type="text" disabled name="name" value={user?.displayName} />

                    <label className='font-semibold'>Email</label>
                    <input className="input input-bordered rounded-none " type="email" name="email" value={user?.email} disabled />

                    <label className='font-semibold'>Address</label>
                    <input placeholder='Address' className="input input-bordered input-primary  border-2 rounded-none " type="text" name="address" required />

                    <label className='font-semibold'>Phone No</label>
                    <input placeholder='Phone no' className="input input-bordered input-primary  border-2 rounded-none " type="text" name="phone" required />

                    <label className='font-semibold'>Quantity</label>
                    <input placeholder={product.minimumQuantity}
                        className="input input-bordered input-primary  border-2 rounded-none " type="number" name="quantity" value={input} onChange={handleChange} required />

                    <input type="submit" className='btn btn-primary mt-2 border-2 rounded-none' value="Place Order" disabled={disablevalue} />
                </form>
            </div>

        </div>
    );
};

export default Booking;