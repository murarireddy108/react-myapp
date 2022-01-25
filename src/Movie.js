import './App.css';
import { MovieList } from './MovieList';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Switch, Route,  Redirect} from "react-router-dom";
import { AddColor } from './color-game/AddColor';
import { EditMovie } from './EditMovie';
import { AddMovie } from './AddMovie';
import { MovieDetails } from './MovieDetails';
import { NotFound } from './NotFound';
import { Welcome } from './Welcome';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import { TicTacToe } from './TicTacToe';
import { BasicForm } from './BasicForm';







export default function Movie() {


 const history = useHistory();
 const [mode , setMode] = useState("dark")

 const theme = createTheme({ // created use context
  palette: {
    mode: mode,
  },
});



return (
   
    // create provider
    <ThemeProvider theme={theme}>  
    <Paper elevation={4} style = {{borderRadius : "0px" , minHeight : "100vh"}}> 
  <div className="App">
       <AppBar style ={{marginBottom : "24px"}} position="static">
        <Toolbar  variant="dense">
        <Button onClick = {()=> history.push("/")} variant="text" color = "inherit">Home</Button>
        <Button onClick = {()=> history.push("/movies")} variant="text" color = "inherit">Movies</Button>
        <Button onClick = {()=> history.push("/add-movies")}  variant="text" color = "inherit">Add movies</Button>
        <Button onClick = {()=> history.push("/color-game")} variant="text" color = "inherit">Color Game</Button>
        <Button onClick = {()=> history.push("/tic-tac-toe")} variant="text" color = "inherit">TicTackToe Game</Button>
        <Button onClick = {()=> history.push("/form")} variant="text" color = "inherit">Basic Form</Button>
         {/* used context in icon-button to change the theme of app without using prop drilling */}
        <Button startIcon= {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
         onClick = {()=> setMode(mode==="light" ? "dark" : "light")} variant="text" color = "inherit" style = {{marginLeft : "auto"}}> {mode === "light" ? "dark" :"light"} mode </Button>
      </Toolbar>
    </AppBar>
   
         <Switch>
         <Route exact path ="/">
            < Welcome />
           </Route>
           <Route path= "/films">
             <Redirect to = "/movies"/>
           </Route>
           <Route path= "/movies/edit/:id">
            <EditMovie />
           </Route>
           <Route path= "/movies/:id">
              <MovieDetails />
           </Route>
           <Route path= "/movies">
           <MovieList  />
           </Route>
           <Route path ="/add-movies">
           <AddMovie />
           </Route>
           <Route path ="/color-game">
             <AddColor />
           </Route>
           <Route path ="/tic-tac-toe">
             <TicTacToe/>
           </Route>
           <Route path ="/form">
             <BasicForm/>
           </Route>
           <Route path ="**">
             <NotFound />
           </Route> 
         </Switch>
  </div>
  </Paper>
  </ThemeProvider>

);
}
