import React from 'react';

import {  
  Sponsor, 
  Product, 
  Newsletter,
  Lector,
  References
} from '../../components';
import  HeroHome  from '../../components/HeroHome/HeroHome';


function Home() {
  return (
    <>
      <HeroHome />
      <Sponsor />
      <Product />
      <Newsletter />
      <Lector />
      <References />
    </>
  );
}

export default Home;