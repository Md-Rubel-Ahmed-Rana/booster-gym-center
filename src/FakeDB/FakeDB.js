const addToDb = (addedTime) => {
    let time = 0;

    const storedTime = localStorage.getItem('time');
    if (storedTime) {
        time = JSON.parse(storedTime);
    }

    const oldTime = time[addedTime];
    if (oldTime) {
        const newTime = oldTime + addedTime;
        time[addedTime] = newTime;
    }
    else {
        time = time + addedTime;
    }
    localStorage.setItem('time', JSON.stringify(time));
}

const getStoredTime = () => {
    let time = {};

    const storedTime = localStorage.getItem('time');
    if (storedTime) {
        time = JSON.parse(storedTime);
    }
    return time;
}

export { 
    addToDb, 
    getStoredTime 
}