import React from 'react';
import GlobalStyle from './globalStyles';

import { 
  Hero, 
  Sponzor, 
  Product, 
  Newsletter,
  Lector,
} from './components';



function Home() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Sponzor />
      <Product />
      <Newsletter />
      <Lector />
    </>
  );
}

export default Home;