
import { useState } from 'react';
import './App.css';
import Movie_list from './composants/Movie_list';
import Movies from './composants/Movies';
import { Data } from './Data';
import AddMovie from './composants/AddMovie';
import { NavBar } from './composants/NavBar';

function App() {
  const [Movies,setMovies]= useState(Data)

  // Add movie

const addMovies=(newMovie)=>{
setMovies([...Movies,newMovie])
}


  // ------ NAVBAR Filter

  const [valeurCherchée, setValeurCherchée] = useState("")
  console.log(valeurCherchée)

  const handleSearch=(e)=>{
    setValeurCherchée(e.target.value)
  }

  const [rate, setrate] = useState("0")
  const handleRating=(rate)=>{
    setrate(rate)}
  return (
    <div className="App">
      <NavBar handleSearch={handleSearch} handleRating={handleRating} rate={rate}/>
      <Movie_list aflem={Movies} search={valeurCherchée} rate={rate}/>
      <AddMovie addMovie={addMovies}/>
      
    </div>
  );
}

export default App;
