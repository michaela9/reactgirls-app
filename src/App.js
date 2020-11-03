import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { 
  InfoSection, 
  Navbar, 
  SponzorSection, 
  ProductSection, 
  NewsletterSection
} from './components';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <InfoSection />
      <SponzorSection />
      <ProductSection />
      <NewsletterSection />
    </Router>
  );
}

export default App;


