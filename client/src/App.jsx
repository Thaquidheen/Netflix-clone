import "./app.scss"

import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import { AuthContext } from './authContext/authContext';
const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Navigate to="/register" />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to={"/"} />} />
        <Route path='/register' element={!user ? <Register /> : <Navigate to={"/"} />} />



        {user && (
          <>
            <Route path='/movies' element={<Home type={"movie"} />} />
            <Route path='/series' element={<Home type={"series"} />} />
            <Route path='/watch' element={<Watch />} />
          </>
        )
        }

        <Route path='/movies' element={!user ? <Navigate to="/login" /> : <Home type={"movie"} />} />
        <Route path='/series' element={!user ? <Navigate to="/login" /> : <Home type={"series"} />} />
        <Route path='/watch' element={<Watch />} />




      </Routes>
    </Router>
  )
};

export default App;