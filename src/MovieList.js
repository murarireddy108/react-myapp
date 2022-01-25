import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { MovieFun } from './MovieFun';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';

// const API_URL = "https://6166c57613aa1d00170a6776.mockapi.io";
const API_URL = "https://61b2f1bfc8d4640017aaf563.mockapi.io";

export function MovieList() {
  const [movies , setMovies] = useState([]) ;    

   const getMovies = () => {
    fetch(`${API_URL}/movies`)
    .then((data)=> data.json())
    .then((mvs) => setMovies(mvs))
   }
  useEffect(getMovies, []);

  const deleteMovie = (id) =>{
    fetch(`${API_URL}/movies/${id}`,
    {method : "DELETE"}).then(()=>getMovies())
  }


  const history = useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name, poster, ratings, summary, id }) => <MovieFun
        name={name}
        poster={poster}
        ratings={ratings}
        summary={summary}
        key = {id}
        id = {id}
        editButton = {
          <IconButton onClick = {()=>history.push("/movies/edit/" + id)}  aria-label="edit" className="toggle-btn"color = "secondary"
           style = {{marginLeft: "auto"}}>
          <EditIcon/>
       </IconButton>} 

        deleteButton = {
        <IconButton onClick = {()=> deleteMovie(id) }
          // console.log("deleting..", index)
          // const deleteIdx = index;
          // const remainingMovies = movies.filter((mv , idx) => idx !== deleteIdx);
          // console.log("remaining movies" , remainingMovies);
          // setMovies(remainingMovies)
           aria-label="delete" className="toggle-btn"color = "error">
            <DeleteIcon />
     </IconButton>
     } />
      )}
    </section>
  );
}
