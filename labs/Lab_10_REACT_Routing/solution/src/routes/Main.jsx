import React from 'react';
import CharacterList from '../components/CharacterList';
import '../styles/main.css'

const Main = () => {
    return (
        <>
            <h1 className='title'>Star Wars Characters</h1>
            <div className='App.css'>
                <CharacterList/>
            </div>
        </>
    )
}

export default Main;