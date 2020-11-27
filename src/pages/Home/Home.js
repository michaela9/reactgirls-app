import React from 'react';

import {  
  Sponzor, 
  Product, 
  Newsletter,
  Lector,
  References
} from '../../components';
import  Hero  from '../../components/reusable/Hero/Hero';
import { heroObjOne } from './Data';


function Home() {
  return (
    <>
      <Hero {...heroObjOne} />
      <Sponzor />
      <Product />
      <Newsletter />
      <Lector />
      <References />
    </>
  );
}

export default Home;