import React from 'react';
import Calendar from '../components/Calendar'


const Main = ({todoData}) => {
    return (
        <>
            <Calendar todoData={todoData}/>
        </>
    )
}

export default Main;