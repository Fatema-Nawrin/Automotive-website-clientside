import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ProfileModal from './ProfileModal';

const MyProfile = () => {
  const [user] = useAuthState(auth);
  // const [openModal, setOpenModal] = useState(false)
  const {
    data: userinfo,
    isLoading,
    refetch,
  } = useQuery('user', () =>
    fetch(`https://public-rozella-fatema.koyeb.app/users/${user.email}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="px-8 lg:px-16 text-lg">
        <h2 className="text-xl py-4">Check and update your profile</h2>
        <p>
          {' '}
          <span className="ml-2 font-bold">Name:</span> {user.displayName}
        </p>
        <p>
          {' '}
          <span className="ml-2 font-bold ">Email:</span> {user.email}
        </p>
        {userinfo?.location && (
          <p>
            {' '}
            <span className="ml-2 font-bold ">Location:</span> {userinfo.location}
          </p>
        )}

        {userinfo?.phone && (
          <p>
            {' '}
            <span className="ml-2 font-bold ">Phone:</span> {userinfo.phone}
          </p>
        )}
        {userinfo?.education && (
          <p>
            {' '}
            <span className="ml-2 font-bold ">Education:</span> {userinfo.education}
          </p>
        )}
        {userinfo?.linkedin && (
          <p>
            {' '}
            <span className="ml-2 font-bold ">Linkedin Profile:</span> {userinfo.linkedin}
          </p>
        )}

        <label htmlFor="my-modal-6" className="mt-4 btn btn-primary modal-button">
          Update
        </label>
        <ProfileModal refetch={refetch} email={user.email}></ProfileModal>
      </div>
    </div>
  );
};

export default MyProfile;
