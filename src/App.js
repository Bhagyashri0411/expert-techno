import './App.css';
import { Cursor } from './components/commoncomponets/Cursor';
import { Header } from './components/commoncomponets/Header';
import Toggle from './components/commoncomponets/Toggle';
import Homepage from './components/pages/Homepages/Homepage';
import About from './components/pages/AboutPages/AboutPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Showcase from './components/pages/Servicespage/Servicefirstsection';
import { Careersection } from './components/Career/Careersection';
import { Contactsection } from './components/pages/Contactpage/Contactsection';
import { useState } from 'react';
import { Footer } from './components/commoncomponets/Footer';
import ScrollToTop from './components/commoncomponets/ScrollToTop';

function App() {

  const [pageName, setPageName] = useState(window.location.pathname.replace("/", ""));

  const handlePageChange = (name) => {
    setPageName(name);
  };

  return (
    <div className="App">
      <Router>
        {pageName !== 'contact' ? (
          <>
            {/* <Toggle /> */}
            <Cursor />
            <Header HandleOpen={handlePageChange} />
            <ScrollToTop/>
            <Switch>
              <Route path="/" exact component={Homepage}></Route>
              <Route path="/aboutus" component={About}></Route>
              <Route path="/services" component={Showcase}></Route>
              <Route path="/career" component={Careersection}></Route>
            </Switch>
            <Footer/>
          </>
        ) :
          <Switch>
            <Route path="/contact"
              render={(props) => <Contactsection {...props} HandleOpen={handlePageChange} />}
            />
          </Switch>
        }

      </Router>

    </div>
  );
}

export default App;
