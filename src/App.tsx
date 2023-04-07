import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Page from './components/Page/Page';
import Message from './components/Message/Message';

function App() {
  return (
    <Routes>
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/Page' element={<Page />} />
      <Route path='/Message' element={<Message />} />
    </Routes>
  );
}

export default App;
