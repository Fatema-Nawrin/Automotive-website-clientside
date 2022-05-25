import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'
import User from './User';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
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
            <h3 className='pb-4 text-lg'>List of users:</h3>
            <div className="overflow-x-auto px-4">
                <table className="table table-zebra w-full lg:w-4/5">

                    <thead>
                        <tr>
                            <th className='text-base'>No</th>
                            <th className='text-base'>Email</th>
                            <th className='text-base'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <User
                            user={user}
                            index={index}
                            key={user._id}
                            refetch={refetch}></User>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;