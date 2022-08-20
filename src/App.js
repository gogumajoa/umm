import './App.css';
import Login from './component/Login';
import Join from './component/Join';
import React from 'react'
//import AuthService from './services/auth.service';
import{ BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { useState, useEffect } from 'react';
//import Index from './component/index'
import Page from './component/Page';
import Star from './component/Star';





function App() {
 // const [currentUser, setCurrentUser] = useState(undefined);

 /* useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };*/
  
  return(
   
    <Router>
      <Routes>
        <Route path='/' element = {<Login/>}></Route>
        <Route path="/Join" element={<Join />} />
        <Route path="/Page" element={<Page />} />
        <Route path="/Star" element={<Star />} />
        <Route path="/Page/:id" element={<Page />} />
        
      </Routes>
    </Router>

  );
}

export default App;
