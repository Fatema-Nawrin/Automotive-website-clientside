import React from 'react';

const Portfolio = () => {
    return (
        <div className='w-4/5 mx-auto my-4 lg:mb-16'>
            <h2 className='text-lg font-semibold my-4'>Portfolio</h2>
            <p>Name: Fatema Nawrin</p>
            <p>Email: nawrin4000@gmail.com</p>
            <p>Education: BSC in Electronics and Telecommunication Engineering (2016-2021)</p>
            <p className='font-bold my-3'>Skills:</p>

            <li> Languages: HTML/CSS, Javascript</li>
            <li> Tools/Framework: React JS, Node js, Express js, Github, Mongodb, Heroku, Bootstrap, Tailwind</li>

            <p className='font-bold my-3'>Projects:</p>
            <a href='https://warehouse-management-2d0b5.web.app/' className='link'>Wooddecor Warehouse</a>
            <br />
            <a href='https://ashley-gray-law.firebaseapp.com/' className='link'>Ashley Gray Law</a>
            <br />
            <a href='https://beamish-nasturtium-8e28d1.netlify.app/' className='link'>Vintage Courtyard</a>


        </div>
    );
};

export default Portfolio;