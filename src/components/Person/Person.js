import "./Person.css"
const Person = ({ person, handleTime }) => {
    const {img, title, description, time} = person;
    return (
        <div className="person shadow-lg">
            <img src={img}  alt="..." />
            <div className="p-3">
                <h5>{title}</h5>
                <p>{description.slice(0, 100)+ "..."}</p>
                <p>Required time: {time} Minutes</p>
            </div>
            <p className="text-center button">
                <button onClick={() => handleTime(person)} className='bg-primary border-0 px-3 py-2 text-white w-100'>Add To List</button>
            </p>
        </div>
    );
};

export default Person;