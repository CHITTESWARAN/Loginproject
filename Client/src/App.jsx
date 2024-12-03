import React from 'react';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import { Routes, Route } from 'react-router-dom'; 
import { UserProvider } from './UserContext';
import Index from './Index';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
    <UserProvider>
      <Navbar />
      <div className='mt-28 text-xl font-light text-black'>
      <ToastContainer />
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
