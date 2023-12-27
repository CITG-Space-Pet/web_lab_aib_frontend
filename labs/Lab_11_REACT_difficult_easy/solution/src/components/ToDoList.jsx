import React, { useState } from "react";
import ToDoForm from "./Calendar/ToDoForm";

const ToDoList = ({deleteTask, todoData, date, addTask}) => {

    let empty = true;

    return (
        <div>
            {todoData.map((data, idx) => 
                data.date.getDate() === date.getDate() && 
                data.date.getFullYear() === date.getFullYear() &&
                data.date.getMonth() === date.getMonth()
                ?
                <div key={idx} className='main'>
                    {empty = false}
                    <ToDoForm addTask={addTask} date={date}/>
                    <div className='content'>
                        <div className='tasks'>
                            <h2>Задачи:</h2>
                            {data.tasks.map((task, idx) => 
                                <div key={idx} style={{display: 'flex'}}>
                                    <h1>{`${(idx + 1)}. ${task}`}</h1>
                                    <button className='delete-btn' onClick={() => {deleteTask(idx)}}>✖</button>
                                </div>
                            )}
                        </div>
                        <div className='descs'>
                            <h2>Описание задач:</h2>
                            {data.desc.map((desc, idx) =>
                                <div className='descr' key={idx}>{`${(idx + 1)}. ${desc}`}</div>
                            )}
                        </div>
                        <div className='times'>
                            <h2>Время:</h2>
                            {data.time.map((time, idx) => 
                                <div key={idx}>{`${(idx + 1)}. ${time}`}</div>
                            )}
                        </div>
                    </div>
                </div>
                :
                <div key={idx}></div>
                )}
                <div className="main">
                    {empty ? <ToDoForm addTask={addTask} date={date}/> : <p></p>}
                </div>
        </div>
    )

}

export default ToDoList;