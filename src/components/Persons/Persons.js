import React, { useEffect, useState } from 'react';
import "./Persons.css"
import Person from '../Person/Person';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Questions from '../Questions/Questions';

const Persons = () => {
    const [persons, setPersons] = useState([]);
    const [person, setPerson] = useState([]);
    useEffect(() => {
        fetch("data.json")
        .then((res) => res.json())
            .then((data) => setPersons(data))
    }, []);

    const handleTime = (pinnedPerson) => {
        const newPerson = [...person,pinnedPerson]
        setPerson(newPerson);
    }
    return (
        <div>
            <div className="main-section">
                <div>
                    <Header />
                    <div className='persons'>
                        {
                            persons.map((person) => <Person
                                person={person}
                                key={person.id}
                                handleTime={handleTime}
                            />)
                        }
                    </div>
                    <Questions />
                </div>
                <div>
                    <Cart person={person}/>
                </div>
            </div>
        </div>
    );
};

export default Persons;