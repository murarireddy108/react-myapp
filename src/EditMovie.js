import { useState  , useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams , useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
// import { formValidateSchema } from './AddMovie'


export function EditMovie() {
  // const history = useHistory();
  const { id } = useParams();
  // const movie = movies[id];
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`https://61b2f1bfc8d4640017aaf563.mockapi.io/movies/${id}` , {method : "GET"})
    .then((data)=> data.json())
    .then((mvinfo) => setMovie(mvinfo))
  }, [id])

   //only show update movie when data is available  
   return movie ? <UpdateMovie movie = {movie} /> : "";

}


function UpdateMovie({movie}){
  // const [name, setName] = useState(movie.name);
  // const [poster, setPoster] = useState(movie.poster);
  // const [ratings, setRating] = useState(movie.ratings);
  // const [summary, setSummary] = useState(movie.summary);
  // const [trailer, setTrailer] = useState(movie.trailer);

  const formValidateSchema = yup.object({
    name : yup.string().required( "Fill Your Good Name Please").min(3),
    poster : yup.string().required().min(4 , "paste the correct URL Please"),
    ratings : yup.number().required("Giving your Rating out of 10").min(0).max(10, "Too much Rating "),
    summary : yup.string().required().min(20),
    trailer : yup.string().required().min(4),
  
   });

  const {handleChange , handleBlur, handleSubmit ,values , errors , touched} = useFormik({
    initialValues : {
      name : movie.name ,
      poster : movie.poster,
      ratings : movie.ratings ,
      summary : movie.summary ,
      trailer : movie.trailer,
    },
    validationSchema : formValidateSchema,
    //only when no error sumbit,
    onSubmit : (updatedMovie) => {
      console.log("onSumbit" , updatedMovie);
      editMovies(updatedMovie);
    },
  });

  const history  = useHistory();

  const editMovies = (updatedMovie) => {
     console.log(updatedMovie);

      // To use Edit and update use GET & PUT  Method follow 3 steps,
     // 1 Method - PUT
    // 2 body  - data & JSON & pass id as params
    // 3 Headers- Json
   fetch(`https://61b2f1bfc8d4640017aaf563.mockapi.io/movies/${movie.id}`,
    {
      method : "PUT",
      body : JSON.stringify(updatedMovie),
      headers: {'Content-Type': 'application/json'},
    }).then(()=> history.push("/movies"));
  };
    // To edit the movie and save the data without using api follow below code...
    // const copyMovie = [...movies];
    // copyMovie[id] = updatedMovie;
    // setMovies(copyMovie);
    //  history.push("/movies")

  return (<form  onSubmit = {handleSubmit}  className="AddMovieForm">
  <TextField  
         id = "name"
        name = "name"
        value={values.name}
        onChange = {handleChange}
        onBlur = {handleBlur}
        error = {errors.name && touched.name}
        helperText =  {errors.name && touched.name && errors.name}
       placeholder=" Movie Name" label="Name" variant="outlined" />

    <TextField 
     id = "poster"
     name = "poster"
     value={values.poster}
     onChange = {handleChange}
     onBlur = {handleBlur}
     error = {errors.poster && touched.poster}
     helperText =  {errors.poster && touched.poster && errors.poster}
     placeholder="Enter URL" label="Poster" variant="outlined" />

    <TextField 
     id = "ratings"
     name = "ratings"
     value={values.ratings}
     onChange = {handleChange}
     onBlur = {handleBlur}
     error = {errors.ratings && touched.ratings}
     helperText =  {errors.ratings && touched.ratings && errors.ratings}
      placeholder="Drop your rating" label="Rating" variant="outlined" />

    <TextField  
        id = "summary"
        name = "summary"
        value={values.summary}
        onChange = {handleChange}
        onBlur = {handleBlur}
        error = {errors.summary && touched.summary}
        helperText =  {errors.summary && touched.summary && errors.summary}
      placeholder="movie descreption" label="Summary" variant="outlined" />

    <TextField 
     id = "trailer"
     name = "trailer"
     value={values.trailer}
     onChange = {handleChange}
     onBlur = {handleBlur}
     error = {errors.trailer && touched.trailer}
     helperText =  {errors.trailer && touched.trailer && errors.trailer}
    placeholder="Trailer URL" label="Trailer" variant="outlined" />

  <Button color = "success" variant="outlined" type = "sumbit">Save</Button>
</form>
);
};