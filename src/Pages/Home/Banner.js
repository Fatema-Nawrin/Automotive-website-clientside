import React from 'react';
import img from '../../images/sam-pearce-warrilow-K_H9cYGjek8-unsplash.jpg'

const Banner = () => {
    return (
        <div className='w-4/5 mx-auto py-8 md:py-16 '>
            <div className='grid grid-cols-1 lg:grid-cols-2 bg-teal-50'>

                <div className='py-4 lg:mt-8 mx-4 lg:mx-8'>
                    <h2 className='text-2xl lg:text-4xl text-gray-500 font-bold lg:py-4'>Blackstone Automotive</h2>
                    <p className='py-2'>We are commited to provide good quality and innovative products to our buyer.</p>
                    <h3 className='text-secondary font-semibold text-lg lg:text-xl py-4'>One of the largest car parts manufacturer in the world.</h3>
                </div>


                <div>
                    <img src={img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;