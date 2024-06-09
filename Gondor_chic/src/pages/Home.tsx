import React from 'react';
import Header from '../components/accueil/Header';
import DayProduct from '../components/accueil/DayProduct';
import Products from '../components/accueil/Products';

const Home: React.FC = () => {
  return (
    <>
    <Header></Header>
    <DayProduct></DayProduct>
    <Products></Products>
    </>

  );
};

export default Home;
