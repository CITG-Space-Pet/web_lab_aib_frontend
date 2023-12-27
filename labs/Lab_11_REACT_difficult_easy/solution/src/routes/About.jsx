import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/about.css'
import ToDoList from '../components/ToDoList';
import { Link } from 'react-router-dom';

const About = ({todoData, setData}) => {
    const { day, year, month } = useParams();
    const date = new Date(year, month, day)

    const addTask = (newTask) => {

        let find = false;
        todoData.map(todo =>
            todo.date.getDate() === date.getDate() && 
            todo.date.getFullYear() === date.getFullYear() &&
            todo.date.getMonth() === date.getMonth()
            ?
            find = true
            :
            0
        )
        if (find) {
            const addElem = todoData.map(todo => 
                todo.date.getDate() === date.getDate() && 
                todo.date.getFullYear() === date.getFullYear() &&
                todo.date.getMonth() === date.getMonth()
                ?
                    {   date: todo.date,
                        tasks: todo.tasks.concat(newTask.task),
                        desc: todo.desc.concat(newTask.desc),
                        time: todo.time.concat(newTask.time),
                    }
                :
                todo
            )
            setData(addElem)
        }
        else {
            const addElem = {
                date: date,
                tasks: newTask.task,
                desc: newTask.desc,
                time: newTask.time,
            }
            setData([...todoData, addElem])        
        }
    }

    const deleteTask = (idx) => {
        const delElem = todoData.map(todo => 
            todo.date.getDate() === date.getDate() && 
            todo.date.getFullYear() === date.getFullYear() &&
            todo.date.getMonth() === date.getMonth()
            ?
                {   date: todo.date,
                    tasks: todo.tasks.filter(task => task !== todo.tasks[idx]),
                    desc: todo.desc.filter(desc => desc !== todo.desc[idx]),
                    time: todo.time.filter(time => time !== todo.time[idx]),
                }
            :
            todo
         )
         setData(delElem)
    }


    return (
        <div>
            <ToDoList deleteTask={deleteTask} todoData={todoData} date={date} addTask={addTask}/>
            <div className='back'>
            <Link to='/'><button>Назад</button></Link>
            </div>
        </div>
    )
}

export default About;

