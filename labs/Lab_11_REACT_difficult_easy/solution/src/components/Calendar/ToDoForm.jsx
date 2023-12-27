import React from "react";
import { useState } from "react";

const ToDoForm = ({addTask}) => {

    const [task, setTask] = useState({task: '', desc: '', time: '', importance: ''})

    const addNewTask = (e) => {
        e.preventDefault();
        addTask({
            task: [task.task],
            desc: [task.desc],
            time: [task.time],
            importance: [task.importance],
        })
        setTask({task: '', desc: '', time: '', importance: ''})
      }

      function getColorByImportance(importance) {
        switch (importance) {
          case 'Подождет':
            return 'green';
          case 'Важно':
            return 'yellow';
          case 'Очень важно':
            return 'orange';
          case 'Супер важно':
            return 'red';
          default:
            return 'white';
        }
      }

      return ( 
        <form className="addTask"> 
          <div className="form-group">
            <input  
              value={task.task} 
              onChange={e => setTask({...task, task: e.target.value})} 
              type="text"  
              placeholder="Задача" 
              className="form-control"
            />
          </div>
       
          <div className="form-group">
            <input  
              value={task.desc} 
              onChange={e => setTask({...task, desc: e.target.value})} 
              type="text"  
              placeholder="Описание задачи" 
              className="form-control"
            />
          </div>
       
          <div className="form-group">
            <input  
              value={task.time} 
              onChange={e => setTask({...task, time: e.target.value})} 
              type="text"  
              placeholder="Время" 
              className="form-control"
            />
          </div>
       
          <div className="form-group">
            <select 
              value={task.importance} 
              onChange={e => setTask({ ...task, importance: e.target.value })} 
              className="form-control" 
              style={{ backgroundColor: getColorByImportance(task.importance) }} 
            > 
              <option value="Подождет" style={{ backgroundColor: getColorByImportance("Подождет") }}>Подождет</option> 
              <option value="Важно" style={{ backgroundColor: getColorByImportance("Важно") }}>Важно</option> 
              <option value="Очень важно" style={{ backgroundColor: getColorByImportance("Очень важно") }}>Очень важно</option> 
              <option value="Супер важно" style={{ backgroundColor: getColorByImportance("Супер важно") }}>Супер важно</option> 
            </select> 
          </div>
       
          <button onClick={e => addNewTask(e)} className="btn btn-primary">Создать заметку</button> 
        </form> 
      )

}

export default ToDoForm;