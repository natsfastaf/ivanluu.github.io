import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Divider } from '@material-ui/core';
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';
import { ReactComponent as LinkedIn } from './LinkedIn.svg';
import { ReactComponent as Mail } from './Mail.svg';

const useStyles = makeStyles({
  homeLogo: {
    width: '16rem',
    margin: '0.5em',
  },

  landing: {
    height: '70vh',
    marginBottom: '15vh',
  },

  body: {
    fontSize: '28x',
    lineHeight: '36px',
  },

  section: {
    marginTop: '10vh',
    marginBottom: '10vh',
  },
  homeGrid: {
    margin: '2em',
    display: 'block',
    justifyContent: 'center',
  },
  bigImage: {
    maxWidth: '100%',
    maxHeight: '50vh',
  },
  landingTitle: {
    fontWeight: 400,
  },
  landingSubtitle: {
    fontWeight: 200,
  },
  logoWrapper: {
    marginBottom: '1em',
  },
  endActions: {
    paddingTop: '4em',
    paddingBottom: '8em',
  },
  endAction: {
    textTransform: 'none',
  },
  links: {
    paddingTop: '1em',
  },
  typical: {
    margin: 0,
    color: '#24688E',
    fontWeight: 600,
  },
  endSection: {
    paddingTop: '15vh',
    paddingBottom: '15vh',
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  const typePause = 3000;

  React.useEffect(() => {
    window.scrollTo(0, 0);
    clearInterval();
    clearTimeout();
  }, []);

  return (
    <Container maxWidth="sm">
      <Helmet>
        <title>Ivan Luu</title>
        <meta name="description" content="Ivan Luu's personal website" />
      </Helmet>
      <Grid container alignItems="center" className={classes.landing}>
        {}
        <div>
          <Typography
            variant="h3"
            align="center"
            className={classes.landingTitle}
            gutterBottom
          >
            <Typical
              className={classes.typical}
              steps={['Welcome!', typePause, typePause * 2]}
              wrapper={'p'}
            />
            My name is Ivan Luu.
          </Typography>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            className={classes.landingSubtitle}
          >
            I'm an undergraduate neuroscience researcher passionate about...
          </Typography>
        </div>
      </Grid>
      <Divider />
      <Fade>
        <div className={classes.section}>
          <Typography variant="h4" align="center">
            Feel free to reach out!
          </Typography>

          <Grid
            container
            justify="space-around"
            alignItems="center"
            spacing={3}
            className={classes.links}
          >
            <Grid item sm={6}>
              <a
                href="https://www.linkedin.com/in/ivanluu/"
                className={classes.homeGrid}
              >
                <Grid justify="space-around" alignItems="center">
                  <LinkedIn className={classes.bigImage} />
                </Grid>
              </a>
            </Grid>
            <Grid item sm={6}>
              <a
                href="mailto:ivanluu2019@gmail.com"
                className={classes.homeGrid}
              >
                <Grid justify="space-around" alignItems="center">
                  <Mail className={classes.bigImage} />
                </Grid>
              </a>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </Container>
  );
};

export default Home;
