import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Counter } from './Counter';






export function MovieFun({ name, poster, ratings, summary , id , editButton , deleteButton }) {
  // console.log(props)

  const [show, setShow] = useState(true);
  
  const history = useHistory();
  const styles = {
    color: ratings < 7.5 ? "red" : "green",
    fontWeight: "bold",
  };

  const styleSummary = {
    display: show ? 'block' : 'none',
  };

  return (
    <Card className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <CardContent>
      <div className="movie-spec">
        <h3 className="movie-name">  {name} 

        <IconButton aria-label="hide" className="toggle-btn"color = "primary" 
         onClick={() =>{history.push("/movies/" + id)} }>
         <InfoIcon/> 

      </IconButton>

        <IconButton aria-label="hide" className="toggle-btn"color = "primary" 
         onClick={() => setShow(!show)}>
         {show ? <ExpandLessIcon /> : <ExpandMoreIcon /> }  
      </IconButton></h3>
        <p className="ratings" style={styles}> <span className = "star">🌟</span>  {ratings}  </p>
      </div>

       {show ? <p style={styleSummary} className="summary">{summary}</p> : "" }
       <CardActions>
         <Counter /> {editButton} {deleteButton}
       </CardActions>
      </CardContent>
    </Card>
  );
}
