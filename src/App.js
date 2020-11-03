import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { InfoSection, Navbar } from './components';

import { SponzorSection } from './components';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <InfoSection />
      <SponzorSection />
    </Router>
  );
}

export default App;


