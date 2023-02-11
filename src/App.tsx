import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/signIn" element={ <SignIn/> } />
      <Route path="/signUp" element={ <SignUp/> } />
    </Routes>
  );
}

export default App;
