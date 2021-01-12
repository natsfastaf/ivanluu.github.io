import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Typography } from '@material-ui/core';

const Blog: React.FC = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Helmet>
          <title>Projects</title>
          <meta name="description" content="My latest interests" />
        </Helmet>
        <Typography variant="h3" gutterBottom>
          Want to know what I've been interested in?
        </Typography>
      </Container>
    </div>
  );
};

export default Blog;
