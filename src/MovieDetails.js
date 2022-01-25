import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState , useEffect } from 'react';


export function MovieDetails() {
  const history = useHistory();
  const { id } = useParams();
  // const movie = movies[id];
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://61b2f1bfc8d4640017aaf563.mockapi.io/movies/${id}` , {method : "GET"})
    .then((data)=> data.json())
    
    .then((mvinfo) => setMovie(mvinfo))
    
  }, [id])

  

  const styles = {
    color: movie.ratings < 7.5 ? "red" : "green",
    fontWeight: "bold",
  };

  return (
    <div>
      <iframe width="100%" height="600" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="movie-detail-container">
        <div className="movie-spec">
          <h3 className="movie-name">  {movie.name} 😍 </h3>
          <p className="ratings" style={styles}> 🌟 {movie.ratings}  </p>
        </div>
        <p className="summary">{movie.summary}</p>
        <Button onClick={() => history.goBack()} variant="outlined" startIcon={<KeyboardBackspaceIcon />}> Back
        </Button>
      </div>
    </div>
  );
}
