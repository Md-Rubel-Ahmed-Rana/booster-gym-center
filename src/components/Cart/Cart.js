import React, { useState } from 'react';
import "./Cart.css"
import Rubel from "./rubel.jpg"
 
const Cart = ({person}) => {
    const [breakTime, setBreakTime] = useState(0);
    const handleBreakTime = (time) => {
        setBreakTime(time)
        console.log(time);
    }

    let newTime = 0;
    for(const newPerson of person){
        newTime = newTime + newPerson.time;
    }
    return (
        <div className='cart'>
            <div className='profile'>
                <img src={Rubel} alt="" />
                <div>
                    <h6>Md Rubel Ahmed Rana</h6>
                    <p>Sylhet, Bangladesh</p>
                </div>
            </div>
            <div className='d-flex justify-content-between mt-3 bg-light px-4 py-1 rounded'>
                <div>
                    <h3 className='m-0'>55kg</h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3 className='m-0'>5.4</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3 className='m-0'>23</h3>
                    <p>Age</p>
                </div>
            </div>
            <div className='m-4'>
                <h3>Add A Break</h3>
                <div className='break-time bg-light p-3 rounded'>
                    <button onClick={() => handleBreakTime(10)}><small>10</small>M</button>
                    <button onClick={() => handleBreakTime(20)}><small>20</small>M</button>
                    <button onClick={() => handleBreakTime(30)}><small>30</small>M</button>
                    <button onClick={() => handleBreakTime(40)}><small>40</small>M</button>
                    <button onClick={() => handleBreakTime(50)}><small>50</small>M</button>
                </div>
            </div>
            <div className='time-details'>
                <h4>Exercise Details</h4>
                <div className='d-flex justify-content-between p-2 bg-light'>
                    <h6>Exercise Time</h6>
                    <p><strong>{newTime}</strong> Minutes</p>
                </div>
            </div>
            <div className='d-flex justify-content-between mt-3 bg-light p-2'>
                <h4>Break Time</h4>
                <p><strong>{breakTime}</strong> Minutes</p>
            </div>
            <div>
                <h3 className='activity'>Activity Completed</h3>
            </div>
        </div>
    );
};

export default Cart;