import React from "react";
import Navbar from './Navbar';
import Home from './Components/Home';
import Action from './Components/Action';
import Adventure from './Components/Adventure';
import Comedy from './Components/Comedy';
import Mystery from './Components/Mystery';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App(){

  return(
    <>
        <BrowserRouter>

            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home/>} />Home
              <Route exact path="/Home" element={<Home/>} />Home
              <Route exact path="/Action" element={<Action/>} />Action
              <Route exact path="/Adventure" element={<Adventure/>} />Adventure
              <Route exact path="/Comedy" element={<Comedy/>} />Comedy
              <Route exact path="/Mystery" element={<Mystery/>} />Mystery

            </Routes>

        </BrowserRouter>
    </>
  )
};
export default App;