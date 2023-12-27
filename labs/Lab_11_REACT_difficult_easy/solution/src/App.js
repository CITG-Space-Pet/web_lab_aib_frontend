import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './routes/Main'
import About from './routes/About'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [todoData, setData] = useState([
    {
        date: new Date(2023, 11, 25), 
        tasks: ['Зачет Веб'], 
        desc: ['Преподаватель: Капкаев Андрей Андреевич'], 
        time: ['12:00'],
        importance: ['Важно']
    },
    {
      date: new Date(2023, 11, 26), 
      tasks: ['Курсач БД'], 
      desc: ['Преподаватель: Игнатьева Олеся Владимировна'], 
      time: ['13:00'],
      importance: ['Важно']
    },
    {
      date: new Date(2023, 11, 27), 
      tasks: ['Зачет БД'], 
      desc: ['Преподаватель: Игнатьева Олеся Владимировна'], 
      time: ['13:00'],
      importance: ['Важно']
    },
    {
      date: new Date(2023, 11, 28), 
      tasks: ['Зачет СПО'], 
      desc: ['Преподаватель: Жуков Вячеслав Васильевич'], 
      time: ['12:00'],
      importance: ['Супер важно']
    },
])


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main todoData={todoData}/>}/>
        <Route path='/about/:day/:year/:month' element={<About todoData={todoData} setData={setData}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
