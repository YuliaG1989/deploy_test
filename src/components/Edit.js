import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
const Edit = (props) =>{
    // let emptyCharacter = ({...props.characters})
    const [character, setCharacter] = useState({...props.character})

    const handleChange = (event) =>{
        setCharacter({...character, [event.target.name]:event.target.value})
        
        }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(character)
      }
    return(
        <>
           <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={character.name} onChange={handleChange} /><br/>
        
        <label htmlFor="age">Age: </label>
        <input type="number" name="age" value={character.age} onChange={handleChange} /><br/>
        <label htmlFor="main_power">Power: </label>
        <input type="text" name="main_power" value={character.main_power} onChange={handleChange} /><br/>
        <label htmlFor="team">Team: </label>
        <input type="text" name="team" value={character.team} onChange={handleChange} />
        <Button type="submit">Update</Button>
      </form>
        </>
    )
}

export default Edit