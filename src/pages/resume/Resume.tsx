import React from 'react';
import { Helmet } from 'react-helmet';
import {Container, Box, Typography} from '@material-ui/core';

const Resume: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container maxWidth="md">
      <Helmet>
        <title>Ivan Luu Resume</title>
        <meta
          name="description"
          content="Page dedicated to projects/resume"
        />
      </Helmet>

        <Typography
            variant="h2"
            gutterBottom
        >
            Ivan Luu's official resume
        </Typography>

      <Box paddingBottom={'10em'}>
      </Box>
    </Container>
  );
};

export default Resume;
