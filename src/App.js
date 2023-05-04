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
              <Route path="/Home" element={<Home/>} />Home
              <Route path="/Action" element={<Action/>} />Action
              <Route path="/Adventure" element={<Adventure/>} />Adventure
              <Route path="/Comedy" element={<Comedy/>} />Comedy
              <Route path="/Mystery" element={<Mystery/>} />Mystery

            </Routes>

        </BrowserRouter>
    </>
  )
};
export default App;