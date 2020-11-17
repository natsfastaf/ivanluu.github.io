import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './pages/home/Home';
import Resume from './pages/resume/Resume';
import Blog from './pages/blog/Blog';
import NotFound from './pages/notfound/NotFound';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { ThemeProvider } from '@material-ui/core';

import theme from './theme';
const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Helmet>
          <meta
            name="keywords"
            content="Ivan, Luu, Pre-Med, Neuroscience, Dallas"
          />
        </Helmet>

        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/blog" exact component={Blog} />
            <Route path="*" exact component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
