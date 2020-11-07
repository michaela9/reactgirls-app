import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { 
  Hero, 
  Navbar, 
  Sponzor, 
  Product, 
  Newsletter,
  Lector,
  Footer
} from './components';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Sponzor />
      <Product />
      <Newsletter />
      <Lector />
      <Footer />
    </Router>
  );
}

export default App;


