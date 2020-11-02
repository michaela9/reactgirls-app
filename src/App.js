import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { InfoSection, Navbar } from './components';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <InfoSection />>
    </Router>
  );
}

export default App;


