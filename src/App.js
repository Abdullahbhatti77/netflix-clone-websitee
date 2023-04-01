import React from "react";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Action from './pages/Action';
import Adventure from './pages/Adventure';
import Comedy from './pages/Comedy';
import Mystery from './pages/Mystery';
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