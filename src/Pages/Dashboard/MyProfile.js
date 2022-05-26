import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ProfileModal from './ProfileModal';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div className='px-4 lg:px-8'>
            <h2 className='text-lg py-4'>Check and update your profile</h2>
            <p> <span className='font-bold'>Name:</span> {user.displayName}</p>
            <p> <span className='font-bold '>Email:</span>  {user.email}</p>

            <label for="my-modal-6" class="mt-4 btn btn-primary modal-button">Update</label>
            <ProfileModal email={user.email}></ProfileModal>
        </div>
    );
};

export default MyProfile;