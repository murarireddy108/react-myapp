// import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';


export function AddMovie() {

  const history  = useHistory();
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [ratings, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");


   const formValidateSchema = yup.object({
   name : yup.string().required( "Fill Your Good Name Please").min(3),
   poster : yup.string().required().min(4 , "paste the correct URL Please"),
   ratings : yup.number().required("Giving your Rating out of 10").min(0).max(10, "Too much Rating "),
   summary : yup.string().required().min(20),
   trailer : yup.string().required().min(4),

  });

  const {handleChange , handleBlur, handleSubmit ,values , errors , touched} = useFormik({
    initialValues : {
      name : "" ,
      poster : "",
      ratings : "" ,
      summary : "" ,
      trailer : ""},
    validationSchema : formValidateSchema,
    //only when no error sumbit,
    onSubmit : (newMovies) => {
      console.log("onSumbit" , newMovies);
      addMovies(newMovies);
    },
  });

  const addMovies = (newMovies) => {
    // const newMovies = {
    //   name,
    //   poster,
    //   ratings,
    //   summary,
    //   trailer,
    // };
    // To copy Movies list & Add New movie List
    // setMovies([...movies, newMovies]);

    // To Add the movie using fetch api use Post method
    // To use Post Method follow 3 steps,
    // 1 Method - Post
    // 2 body  - data & JSON
    // 3 Headers- Json
    fetch(`https://node-movie-app-zen-class.herokuapp.com`,
    {
      method : "POST",
      body : JSON.stringify(newMovies),
      headers: {'Content-Type': 'application/json'},
    }).then(()=> history.push("/movies"));
  };

  return (<form onSubmit = {handleSubmit} className="AddMovieForm">
    {/* To change the value of the inputfiled without using Formik */}
    {/* <TextField value={name} onChange={(event) => setName(event.target.value)}
      placeholder=" Movie Name" label="Name" variant="outlined" /> */}

    
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

    <Button type = "sumbit" variant="outlined" >Add Movies</Button>
  </form>
  );
}
