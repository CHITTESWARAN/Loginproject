import React from 'react';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import { Routes, Route } from 'react-router-dom'; 
import { UserContext, UserProvider } from './UserContext';
import Index from './Index';

const App = () => {
  return (
    <>
    <UserProvider>
      <Navbar />
      <div className='mt-28 text-2xl font-light text-black'>
      <Routes>
      <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </div>
      </UserProvider>
    </>
  );
};

export default App;
