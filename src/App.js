import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { 
  InfoSection, 
  Navbar, 
  SponzorSection, 
  ProductSection, 
  NewsletterSection,
  LectorSection
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
      <LectorSection />
    </Router>
  );
}

export default App;


