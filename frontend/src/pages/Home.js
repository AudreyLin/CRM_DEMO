import React from 'react';
import Button from '../shared/buttons/Button';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <div className='heroSection'>
      <div className='heroContent'>
        <h1>CRM Sales Pipeline</h1>
        <h2>Convert leads into loyal clients.</h2>
        <p>
          Powerful, easy-to-use software to track and manage your leads and
          clients. Check out the free demo.
        </p>
        <Button onClick={() => navigate('/login')}>Demo</Button>
      </div>
    </div>
  );
};

export default Home;
