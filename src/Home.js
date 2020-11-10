import React from 'react';
import GlobalStyle from './globalStyles';

import { 
  Hero, 
  Sponzor, 
  Product, 
  Newsletter,
  Lector,
  References
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
      <References />
    </>
  );
}

export default Home;