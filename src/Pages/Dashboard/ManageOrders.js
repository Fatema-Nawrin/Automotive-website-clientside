import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import SingleOrder from './SingleOrder';

const ManageOrders = () => {
    const { data: bookings, isLoading, refetch } = useQuery('allbookings', () => fetch('https://fierce-fortress-97663.herokuapp.com/allbookings', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='px-4 lg:px-2 py-4'>
            <h3 className='pb-4 px-4 text-lg'>List of Orders:</h3>
            <div className="overflow-x-auto px-4">
                <table className="table table-zebra w-full lg:w-9/12">

                    <thead>
                        <tr>
                            <th className='text-base'>No</th>
                            <th className='text-base'>Buyer</th>
                            <th className='text-base'>Product</th>
                            <th className='text-base'>Quantity</th>
                            <th className='text-base'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => <SingleOrder
                            booking={booking}
                            index={index}
                            key={booking._id}
                            refetch={refetch}></SingleOrder>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;