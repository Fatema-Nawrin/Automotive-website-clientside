import React from 'react';

const User = ({ user, index, refetch }) => {
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td><button className='btn btn-primary btn-sm'>Make Admin</button></td>
        </tr>


    );
};

export default User;