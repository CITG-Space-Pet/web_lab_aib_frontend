import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './index.css'
import * as calendar from './calendar'

const Calendar = ({todoData}) => {

        const [date, setDate] = useState(new Date())
        const [todo, setToDo] = useState([])

        useEffect(() => {
            const updateToDo = () => {
                setToDo(todoData.filter(data => 
                    data.date.getFullYear() === date.getFullYear() && data.date.getMonth() === date.getMonth()
                    ))
            }
            updateToDo()
        }, [date]);

        const setMonthSelect = (e) => {
            setDate(new Date(date.getFullYear(), e.target.value))
        }

        const setYearSelect = (e) => {
            setDate(new Date(e.target.value, date.getMonth()))
        }

        const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
        const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сетнтябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
        const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
        const daysInMonth = calendar.getMonthData(date.getFullYear(), date.getMonth())

        return (
            <>
                <div className="selectDate">
                    <select
                    defaultValue={date.getMonth()}
                    onChange={setMonthSelect}>
                        {months.map((name, idx) =>
                        <option key={name} value={idx}>{name}</option>
                    )}</select>

                    <select 
                    defaultValue={date.getFullYear()}
                    onChange={setYearSelect}
                    className="years">
                        {years.map((name, idx) =>
                        <option key={idx} value={name}>{name}</option>
                    )}</select>
                </div>

                <div className="calendar">
                    <table cellSpacing="0" cellPadding="0">
                        <thead>
                            <tr className="weekNames">
                                {weekDays.map(name =>
                                    <th key={name}>
                                        {name}
                                    </th>
                                )}
                            </tr>
                        </thead>
                        
                        <tbody>
                            {daysInMonth.map((wDays, idx) => 
                                <tr key={idx} className="week">
                                    {wDays.map((date, idx) => typeof(date) !== 'number' ?
                                        <td 
                                        key={idx} 
                                        className="day" 
                                        style={
                                            date.getDate() === new Date().getDate() && 
                                            date.getFullYear() === new Date().getFullYear() &&
                                            date.getMonth() === new Date().getMonth()
                                            ? {backgroundColor: 'skyblue'} 
                                            : {backgroundColor: 'white'
                                        }}
                                        > 
                                            <Link 
                                                to={`/about/${date.getDate()}/${date.getFullYear()}/${date.getMonth()}`} 
                                                style={{ color: 'inherit', textDecoration: 'inherit'}} 
                                                key={date.getDate()} 
                                                className="dayContent"
                                                >
                                                    <div>
                                                        <p className="dayNum">{date.getDate()}</p>
                                                    </div>
                                                    {todo.map( (td, idx) => 
                                                        td.date.getDate() === date.getDate() 
                                                        ?
                                                        <div key={idx} className="textContent">
                                                            <h5>{td.tasks[0]}</h5>
                                                            <h5>{td.tasks[1]}</h5>
                                                            <p className="desc">{td.desc[0]}</p>
                                                            <p className="time">{td.time[0]}</p>
                                                            {console.log(td.tasks.length)}
                                                            {td.tasks.length > 2 ? <div className="moreTasks"><div>{`+${td.tasks.length - 2}`}</div></div> : <div></div>}
                                                        </div>
                                                        :
                                                        <div key={idx} />
                                                    )}
                                            </Link>
                                        </td>
                                        :
                                        <td key={idx} className="day" style={{opacity: '0.5'}}>
                                            <div className="dayContent">
                                                <p className="dayNum">{date}</p>
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }


export default Calendar;
