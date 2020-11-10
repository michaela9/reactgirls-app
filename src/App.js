import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { Navbar, Footer } from './components';
import Home from './Home';
import About from './About';
import Mentoring from './Mentoring';
import Academy from './Academy';
import Contact from './Contact';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/mentoring' exact component={Mentoring} />
        <Route path='/academy' exact component={Academy} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;


