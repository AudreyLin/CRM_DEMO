import React from 'react';
import { Link } from 'react-router-dom';
import './Title.css';

const Title = (props) => {
  return (
    <Link to='/' className='title'>
      <h2 className='title'>CRM</h2>
    </Link>
  );
};

export default Title;
