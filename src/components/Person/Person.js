import React from 'react';
import "./Person.css"

const Person = (props) => {
    const {img, title, description} = props.person;
    console.log(img);
    return (
        <div className="col p-4 ">
            <div className="card shadow-lg">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.slice(0, 100)+ "..."}</p>
                </div>
                <button className='bg-primary border-0 px-3 py-2 text-white'>Add To List</button>
            </div>
        </div>
    );
};

export default Person;