import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './routes/Main'
import About from './routes/About'
import { useState } from 'react';

function App() {

  const [todoData, setData] = useState([
    {
        date: new Date(2023, 11, 5), 
        tasks: ['Группа Лифт', 'Курс: Python Pro', 'React Front'], 
        desc: ['Какая-то группа лифт(рок наверное)', 'Курс по Python', 'Курсы по React'], 
        time: ['15:00-17:30', '12:25-14:00', '18:00-20:00'],
    },
    {
        date: new Date(2023, 11, 29), 
        tasks: ['Группа Лифт', 'Курс: Python Pro'], 
        desc: ['Какая-то группа лифт(рок наверное)', 'Курс по Python'], 
        time: ['15:00-17:30', '12:25-14:00'],
    },
    {
        date: new Date(2023, 11, 13), 
        tasks: ['Группа Лифт', 'Курс: Python Pro'], 
        desc: ['Какая-то группа лифт(рок наверное)', 'Курс по Python'], 
        time: ['15:00-17:30', '12:25-14:00'],
    },
    {
        date: new Date(2023, 11, 18), 
        tasks: ['Группа Лифт', 'Курс: Python Pro'], 
        desc: ['Какая-то группа лифт(рок наверное)', 'Курс по Python'], 
        time: ['15:00-17:30', '12:25-14:00'],
    },
    {
      date: new Date(2023, 10, 15), 
      tasks: ['Группа Лифт', 'Курс: Python Pro'], 
      desc: ['Какая-то группа лифт(рок наверное)', 'Курс по Python'], 
      time: ['15:00-17:30', '12:25-14:00'],
    },
    {
    date: new Date(2023, 10, 11), 
    tasks: ['Группа Лифт', 'Курс: Python Pro'], 
    desc: ['Какая-то группа лифт(рок наверное)', 'Курс по Python'], 
    time: ['15:00-17:30', '12:25-14:00'],
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
