import React from 'react';
import Menu from './Menu';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Menu />
      <div className="centro">
        <h1>Äriete</h1>
        <h2>Presentando</h2>
        <h3>Las flores del muelle</h3>
        <img src="/images/banda1.jpeg" alt="Las flores del muelle" className="portada" />
      </div>
    </div>
  );
};

export default Home;
