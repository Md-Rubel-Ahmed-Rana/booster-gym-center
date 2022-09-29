import React, { useEffect, useState } from 'react';
import "./Persons.css"
import Person from '../Person/Person';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';


const Persons = () => {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        fetch("data.json")
        .then((res) => res.json())
            .then((data) => setPersons(data))
    }, [])

    return (
        <div>
            <Header />
            <div className="main-section">
                <div className='persons'>
                    {
                        persons.map((person) => <Person person={person} key={person.id} />)
                    }
                </div>
                <div>
                    <Cart />
                </div>
            </div>
        </div>
    );
};

export default Persons;