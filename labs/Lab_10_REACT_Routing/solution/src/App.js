import './styles/App.css';
import React from 'react';
import Main from './routes/Main'
import About from './routes/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about/:id' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;