import React from 'react';

const Blogs = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <h2 className='py-8 text-center font-semibold text-lg'>Question and Answers</h2>
            <h3 className='py-4 font-semibold'>How to improve the performance of a React Application?</h3>
            <p className='pb-3'>To optimize performance of react applications, developers adapts many optimization techmiques.
                <li>Instead of placing state update in parents component, it can be placed in child component only where it is necessary. So, it will not be re rendered unnecessarily in parents and all child components.  </li>
                <li>Only render the components that is visible in windows viewport and by scrolling remaining components will render replacing items that exit the view. </li>
                <li>Priotize what is needed to be loaded first using code splitting techniques</li>
            </p>
            <h3 className='py-4 font-semibold'>What are the different ways to manage a state in a React application?</h3>
            <p>React state management can be done by using react state hooks and redux., React has useState hook which re render when state  changes. There is also useReducer hook and it implements reducer to manage state. A reducer is a function which takes the previous state and an action and returns the next state. THere is a library called Redux which also helps with state management in React.</p>
            <h3 className='py-4 font-semibold'>How does prototypal inheritance work?</h3>
            <p>In JavaScript, objects have a special hidden property as named prototype, that is either null or references to another object.The Prototypal Inheritance is a feature in javascript and it means methods and properties in objects can be shared.It is a method by which an object can inherit the properties and methods of another object.</p>
            <h3 className='py-4 font-semibold'> Why you do not set the state directly in React?</h3>
            <p>As we know React updates original DOM when there is differences between old and new virtual DOM. So, if state is changed directly, there will not be any changes in previous and new virtual DOM and original DOM will not automatically re render. Changes wil occur only after reloading. That's why,state is not set directly. </p>
            <h3 className='py-4 font-semibold'>What is a unit test? Why should write unit tests?
            </h3>
            <p>In React, unit tests means testing an individual react component.Unit testing can be really helpful for react applicatins. Unit testing helps in reducing error and makes debugging process easier. It also helps in improving the quality of code and gives faster feedback while developing applications.</p>
        </div>
    );
};

export default Blogs;