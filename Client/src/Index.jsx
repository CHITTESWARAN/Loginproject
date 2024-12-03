import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Index = () => {
  const { username } = useContext(UserContext); 

  return (
    <div>
      {username ? (
        <h1 >Welcome to admin pannel</h1> 
      ) : (
        <h1>Please log in to view the content</h1> 
      )}
    </div>
  );
};

export default Index;
