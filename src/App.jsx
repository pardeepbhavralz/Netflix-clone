import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Movieflix from "./pages/Netflix";
import Signup from "./pages/Signup";
import Player from "./pages/Player";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import UserLiked from "./pages/UserLiked";


export default function App(){
  return ( 
    <BrowserRouter>
    <Routes>

<Route exact path="/Login" element={<Login />}/>
<Route exact path="/Signup" element={<Signup />}/>
<Route exact path="/Player" element={<Player />}/>
<Route exact path="/movies" element={<Movies />}/>
<Route exact path="/tv" element={<TVShows />}/>
<Route exact path="/mylist" element={<UserLiked />}/>

<Route exact path="/" element={<Movieflix/>}/>



    </Routes>
    </BrowserRouter>
  );
}
