import React, { Fragment, useState, useEffect } from "react";
import NavHeader from "./components/layout/NavHeader";
import Routing from "./routes/Routing";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from './components/animations/loader/Loader'
import Footer from './components/footer/Footer'
import ScrollToTop from './components/scroll/ScrollToTop'
import ScrollToTopButton from './components/scroll/ScrollToTopButton'
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.load = setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Router>
      <Fragment>
        <NavHeader />
        <ScrollToTop/>
        <Routing />
        <ScrollToTopButton/>
        <Footer/>
      </Fragment>
    </Router>
  );
};

export default App;
