import React, { useState } from "react";
import ToDoForm from "./Calendar/ToDoForm";
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoList = ({deleteTask, todoData, date, addTask}) => {

    let empty = true;

    return (
<div className="container">
    {todoData.map((data, idx) => 
        data.date.getDate() === date.getDate() && 
        data.date.getFullYear() === date.getFullYear() && 
        data.date.getMonth() === date.getMonth() 
        ? 
        <div key={idx} className="main"> 
            {empty = false} 
            <ToDoForm addTask={addTask} date={date}/> 
            <div className="content"> 
                <div className="tasks"> 
                    <h2>Задачи:</h2> 
                    {data.tasks.map((task, idx) => 
                        <div key={idx} className="task-item"> 
                            <h1>{`${(idx + 1)}. ${task}`}<p>&nbsp;&nbsp;&nbsp;</p><button className="btn btn-danger"   onClick={() => {deleteTask(idx)}}>Удалить</button> </h1> 
                            
                        </div> 
                    )} 
                </div> 
                <div className="descs"> 
                    <h2>Описание задач:</h2> 
                    {data.desc.map((desc, idx) => 
                        <div className="descr" key={idx}>{`${(idx + 1)}. ${desc}`}</div> 
                    )} 
                </div> 
                <div className="times"> 
                    <h2>Время:</h2> 
                    {data.time.map((time, idx) => 
                        <div key={idx}>{`${(idx + 1)}. ${time}`}</div> 
                    )} 
                </div> 
                <div className="importance"> 
                    <h2>Важность:</h2> 
                    {data.importance.map((importance, idx) => 
                        <div key={idx}>{`${(idx + 1)}. ${importance}`}</div> 
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