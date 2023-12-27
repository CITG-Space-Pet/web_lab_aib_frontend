import './App.css';
import { Routes, Route, Link, useParams } from 'react-router-dom'
import { About } from './routes/About'
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        setPeople(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return ( 
    <> 
      <header className="navbar navbar-expand-lg navbar-dark bg-dark"> 
      <Link className="navbar-brand" to="/" style={{marginLeft: "90px"}}>Home</Link>
      <Link className="navbar-brand" to="/about">About</Link> 
      </header> 
      <div className="container py-4">
        <Routes> 
          <Route path="/" element={<UserList people={people} />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/user/:id" element={<UserDetails people={people} />} /> 
        </Routes> 
      </div>
    </> 
  );
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function UserList({ people }) {
  return (
    <div className="container">
      <h2 className="mt-3">People</h2>
      <ul className="list-group">
        {people.map((person) => (
          <li className="list-group-item" key={person.url}>
            <Link className="text-decoration-none random-color" style={{ color: getRandomColor() }} to={`/user/${extractIdFromUrl(person.url)}`}>{person.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function fetchPlanetName(url) {
  document.getElementById('loading-animation').style.display = 'block';
  const response = await fetch(url);
  const data = await response.json();
  document.getElementById('loading-animation').style.display = 'none';
  return data.name;
}

function UserDetails({ people }) {
  const { id } = useParams();
  const person = people.find((p) => extractIdFromUrl(p.url) === id);
  const [planetName, setPlanetName] = useState("");

  useEffect(() => {
    if (person) {
      fetchPlanetName(person.homeworld).then((name) => {
        setPlanetName(name);
      });
    }
  }, [person]);

  if (!person) {
    return <div>Person not found</div>;
  }

  return ( 
    <div className="container">
 
      <ul className="list-group">
        <li className="list-group-item"><h2>{person.name}</h2></li>
        
        <li className="list-group-item"><p>height: {person.height}</p></li>
        <li className="list-group-item"><p>mass: {person.birth_year}</p></li>
        <li className="list-group-item"><p>hair_color: {person.mass}</p></li>
        <li className="list-group-item"><p>skin_color: {person.skin_color}</p></li>
        <li className="list-group-item"><p>eye_color: {person.eye_color}</p></li>
        <li className="list-group-item"><p>birth_year: {person.birth_year}</p></li>
        <li className="list-group-item"><p>gender: {person.gender}</p></li>
        <li className="list-group-item"><p>homeworld: {planetName} <p id="loading-animation">Загрузка..</p> </p></li>

        </ul>
      </div>
    );
}

function extractIdFromUrl(url) {
  const matches = url.match(/\/(\d+)\/$/);
  return matches ? matches[1] : null;
}

export default App;
