import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        console.log(user);
    }
    return (
        <div className='flex justify-center px-2'>
            <div>
                <h2 className='text-xl lg:text-3xl py-6 text-center'>Login</h2>
                <p className='text-center'>Login to access our community and users resources and place your order.</p>
                <p><small>New to Blackstone Automotive? <Link className='text-secondary font-semibold' to='/signup'>Create New Account</Link></small></p>
                <div className="divider">or</div>
                <div className='text-center'>
                    <button onClick={() => signInWithGoogle()} className='mt-2 btn btn-outline btn-secondary'>Continue with Google</button>
                </div>

            </div>

        </div>
    );
};

export default Login;