import React from 'react';

//Handle not exist route
const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: 'red' }}>404 Not Found!</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
