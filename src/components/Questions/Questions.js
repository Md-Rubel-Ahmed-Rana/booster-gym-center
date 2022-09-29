import React from 'react';

const Questions = () => {
    return (
        <>
        <h2 className='text-center mb-4'>Read React Basic Concept</h2>
        <div className='d-lg-flex gap-3 text-white'>
            <div className='bg-secondary p-2 rounded mb-3'>
                <h5>How does ReactJs work?</h5>
                <p>ReactJS divides the UI into isolated reusable pieces of code is called components. React components work similarly to JavaScript functions as they accept arguments called properties or props. It's possible to have as many components as necessary without cluttering code.</p>
            </div>
            <div className='bg-secondary p-2 rounded mb-3'>
                <h5>What is the difference between props and state?</h5>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component. It's and cannot be passed to other components. The setState function is used to update the state values in the component.</p>
            </div>
            <div className='bg-secondary p-2 rounded mb-4'>
                <h5>What does useeffect do without fetching data?</h5>
                <p>Simply useEffect is the side of ReactJS. Without fetching data, useEffect uses setInterval, setTimeout and others. Specially it give a super oportunity to loadData from server depend on another data or state.</p>
            </div>
        </div>
        </>
    );
};

export default Questions;