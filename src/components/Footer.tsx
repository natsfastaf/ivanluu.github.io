import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography, Divider, Grid } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    marginTop: '6em',
  },
  logo: {
    height: '2.75em',
    padding: '1em',
    margin: 'auto',
  },
  footerLink: {
    color: 'inherit',
  },
  location: {
    fontWeight: 300,
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();

  const [onHomePage, setOnHomePage] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const currentPath = location.pathname;
    setOnHomePage(currentPath === '/');
  }, [location]);

  return (
    <Container maxWidth="md" className={classes.root}>
      <Divider />
      <Box minHeight="10em" paddingY={5}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography
              gutterBottom
              color="textSecondary"
              align="right"
              variant="subtitle2"
            >
              <a
                href="https://www.linkedin.com/in/ivanluu/"
                className={classes.footerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              {' | '}
              <a
                href="mailto:ivanluu2019@gmail.com"
                className={classes.footerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                E-mail
              </a>
            </Typography>

          </Grid>
          <Grid item xs>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                color="textSecondary"
                align="center"
                variant="subtitle2"
              >
                IvanLuu.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
