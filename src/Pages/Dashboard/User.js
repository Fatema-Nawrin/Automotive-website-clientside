import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://fierce-fortress-97663.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Sorry, failed to make this user admin.')
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast('Succesfully given a user admin role.')
                }
            })
    }
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{role === 'admin' ? <p className='text-secondary font-semibold'>Admin</p> : <button onClick={makeAdmin} className='btn btn-primary btn-sm'>Make Admin</button>}</td>
        </tr>


    );
};

export default User;