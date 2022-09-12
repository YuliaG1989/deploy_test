import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
const Add = (props) =>{
    let emptyCharacter = {name:"", age:"", main_power:"", team:"" }
    const [character, setCharacter] = useState(emptyCharacter)

    const handleChange = (e)=>{
        setCharacter({...character, [e.target.name]:e.target.value, [e.target.age]:
            e.target.value, [e.target.main_power]:e.target.value, [e.target.team]:e.target.value
    })}
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(character)
        setCharacter(emptyCharacter)
      }
    return(
        <>
         <h4>Add a Character</h4>
        <div className="container">
       
           <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={character.name} onChange={handleChange} />
        <br />
       
        <label htmlFor="age">Age: </label>
        <input type="number" name="age" value={character.age} onChange={handleChange} /> <br />
        <label htmlFor="main_power">Power: </label>
        <input type="text" name="main_power" value={character.main_power} onChange={handleChange} /> <br />
        <label htmlFor="team">Team: </label>
        <input type="text" name="team" value={character.team} onChange={handleChange} />
        <Button className='btn btn-success' type="submit"> Submit</Button>
      </form>
      </div>
        </>
    )
}

export default Add