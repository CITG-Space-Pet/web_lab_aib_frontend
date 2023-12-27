import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import getUrl from '../urls'
import '../styles/about.css'
import { Link } from 'react-router-dom'


const About = () => {
    const { id } = useParams();
    const [character, setChar] = useState({})

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`).then((resp) => {
            const charact = resp.data;
            setChar(charact);
    });
    }, []);

    return (
        <div className="content">
            <h1>Full character information: {character.name}</h1>
            <div className='image'>
                <img src={getUrl(id)}/>
                <ul className='discription'>
                    <li>Name: {character.name}</li>
                    <li>Height: {character.height}</li>
                    <li>Mass: {character.mass}</li>
                    <li>Hair Color: {character.hair_color}</li>
                    <li>Skin Color: {character.skin_color}</li>
                    <li> Eye Color: {character.eye_color}</li>
                    <li>Year of birth: {character.birth_year}</li>
                    <li> Gender: {character.gender}</li>
                </ul>
            </div>
            <Link to='/'>
                <button className='backToMenu'>Назад</button>
            </Link>
        </div>
    )
}

export default About;