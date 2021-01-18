import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { Navbar, Footer } from './components';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Mentoring from './pages/Mentoring/Mentoring';
import Academy from './pages/Academy/Academy';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './components/reusable/ScrollToTop';
import { ThemeProvider } from './ThemeContext';


function App() {
  return (
    <ThemeProvider>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
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
    </ThemeProvider>
    
  );
}

export default App;


