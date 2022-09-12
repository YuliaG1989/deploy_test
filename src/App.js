import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Add from './components/Add.js';
import Edit from './components/Edit.js';
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap';
function App() {

  const [characters, setCharacters] = useState([])
  //======READ CHARACTER========//

  const getCharacters =()=>{
    axios.get('http://localhost:8000/api/characters').then((response)=>{
    
        setCharacters(response.data)
    
  })}
  useEffect(() => {
    getCharacters()
   }, [])

   //======CREATE CHARACTER========//

   const handleCreate = (addCharacter) => {
    axios
      .post('http://localhost:8000/api/characters', addCharacter)
      .then((response) => {
        console.log(response)
        getCharacters()
      })
  }

  //======DELETE CHARACTER========//
  const handleDelete = (event) => {
    axios
      .delete('http://localhost:8000/api/characters/' + event.target.value)
      .then((response) => {
        getCharacters()
      })
  }
  //======UPDATE CHARACTER========//
  const handleUpdate = (editCharacter) => {
 
    axios
      .put('http://localhost:8000/api/characters/' + editCharacter.id, editCharacter)
      .then((response) => {
        getCharacters()
      })
  }
  return (
    <>
    <h1>Marvel</h1>
    <Add handleCreate={handleCreate} />
    <div className="all">
    {characters.map((character)=>{
      return(
        <>
        
        <div className='marv' key={character.id}>
          <h2>{character.name}</h2>
          <h4>Age: {character.age}</h4>
          <h4>Power: {character.main_power}</h4>
          <h4>On team: {character.team}</h4>
          <details>
            <summary>Update Or Thanos</summary>
        <Edit handleUpdate={handleUpdate} character={character} />
        <Button className='btn btn-danger' onClick={handleDelete} value={character.id}>Thanos</Button>
        </details>
        
        </div>
      
        </>
      )
    })}
    </div>
    </>
  );
}

export default App;
