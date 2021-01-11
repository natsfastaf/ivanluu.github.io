import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Typography } from '@material-ui/core';

const NotFound: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Helmet>
        <title>404 : Page Not Found</title>
      </Helmet>
      <Typography variant="h2" gutterBottom>
        Oops! Could not find the page you are looking for.
      </Typography>
    </Container>
  );
};

export default NotFound;
