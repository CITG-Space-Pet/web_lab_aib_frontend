import React from "react";
import { useState } from "react";

const ToDoForm = ({addTask}) => {

    const [task, setTask] = useState({task: '', desc: '', time: ''})

    const addNewTask = (e) => {
        e.preventDefault();
        addTask({
            task: [task.task],
            desc: [task.desc],
            time: [task.time],
        })
        setTask({task: '', desc: '', time: ''})
      }

    return (
        <form className='addTask'>
            <input 
            value={task.task}
            onChange={e => setTask({...task, task: e.target.value})}
            type='text' 
            placeholder='Задача'
            ></input>

            <input 
            value={task.desc}
            onChange={e => setTask({...task, desc: e.target.value})}
            type='text' 
            placeholder='Описание задачи'
            ></input>

            <input 
            value={task.time}
            onChange={e => setTask({...task, time: e.target.value})}
            type='text' 
            placeholder='Время'
            ></input>

            <button onClick={e => addNewTask(e)}>Создать заметку</button>
      </form>
    )

}

export default ToDoForm;