import React from 'react';
import GlobalStyle from './globalStyles';

import { 
  Hero, 
  Navbar, 
  Sponzor, 
  Product, 
  Newsletter,
  Lector,
  Footer
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
      <Footer />
    </>
  );
}

export default Home;