import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


const CharacterList = () => {

    const [characters, setChar] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people').then((resp) => {
            const allPersons = resp.data;
            setChar(allPersons.results);
    });
    }, []);

    return (
        <div className='mainPage'>
        {characters.map((char, id) => (
            <Link to={`/about/${parseInt(id) + 1}`}>
                <button key={id + 1} className='character' onClick={() => {console.log(id)}}>
                    <div className='name'>
                        {char.name}
                    </div>
                    <div style={{fontStyle: 'italic'}}>
                        Click to get more info
                    </div>
                </button>
            </Link>
        ))}
    </div>
    )
}

export default CharacterList;