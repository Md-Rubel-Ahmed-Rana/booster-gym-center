import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';

const Persons = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        fetch("data.json")
        .then((res) => res.json())
            .then((data) => setPersons(data))
    }, [])
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                persons.map((person) => <Person person={person} key={person.id} />)
            }
        </div>
    );
};

export default Persons;