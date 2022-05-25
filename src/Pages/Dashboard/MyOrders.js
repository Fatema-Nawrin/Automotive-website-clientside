import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'

const MyOrders = () => {
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://fierce-fortress-97663.herokuapp.com/bookings?buyerEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => { setBookings(data) })
        }

    }, [user])

    return (
        <div className='px-4 lg:px-2 py-4'>
            <p className='pb-4'>Total number of products you ordered: {bookings.length}</p>
            <div className="overflow-x-auto px-4">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{booking.product}</td>
                                <td>{booking.orderQuantity}</td>
                                <td>{booking.address}</td>
                                <td><button className='btn btn-error btn-sm'>Delete</button></td>

                                <td><Link to='/'><button className='btn btn-primary btn-sm'> Pay </button></Link></td>
                            </tr>
                        )}



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;