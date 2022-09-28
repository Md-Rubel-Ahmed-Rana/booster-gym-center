import React from 'react';
import "./Cart.css"
import Rubel from "./rubel.jpg"
 
const Cart = () => {
    return (
        <div className='cart bg-white'>
            <div className='profile'>
                <img src={Rubel} alt="" />
                <div>
                    <h6>Md Rubel Ahmed Rana</h6>
                    <p>Sylhet, Bangladesh</p>
                </div>
            </div>
            <div className='d-flex justify-content-between mt-3 bg-info px-4 py-1 rounded-lg'>
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
        </div>
    );
};

export default Cart;