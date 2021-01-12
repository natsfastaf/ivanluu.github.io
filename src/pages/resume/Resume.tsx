import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Box, Typography } from '@material-ui/core';

const Resume: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container maxWidth="md">
      <Helmet>
        <title>Ivan Luu Resume</title>
        <meta name="description" content="Page dedicated to projects/resume" />
      </Helmet>
      <Typography variant="h3" gutterBottom>
        My Resume
      </Typography>
      <Typography variant="h4" gutterBottom>
        UT Southwestern Medical Center
      </Typography>
      <Typography variant="h6" gutterBottom>
        Research Intern, Department of Physical Medicine & Rehabilitation <br />
        Dec 2020 - Present
      </Typography>
      <Typography variant="h6" gutterBottom>
        Research Assistant, Neurosurgery Research Team <br /> Jun 2020 - Present
      </Typography>
      <Typography variant="h6" gutterBottom>
        Research Assistant, Neurosurgery Research Team <br /> Jun 2020 - Present
      </Typography>
      <Typography variant="h6" gutterBottom>
        Undergraduate Student Researcher <br /> Aug 2019 - Present
      </Typography>
      <Typography variant="h4" gutterBottom>
        Co-Founder || Texas Global Health Initiative
      </Typography>
      <Typography variant="h6" gutterBottom>
        Oct 2020 - Present
      </Typography>
      <Typography variant="h4" gutterBottom>
        Teaching Assistant || University of Texas at Dallas
      </Typography>
      <Typography variant="h6" gutterBottom>
        Aug 2020 - Dec 2020
      </Typography>
      <Typography variant="h4" gutterBottom>
        Research Assistant || University of Texas at Dallas
      </Typography>
      <Typography variant="h6" gutterBottom>
        Jun 2019 - Aug 2019
      </Typography>
      <Box paddingBottom={'10em'}></Box>
    </Container>
  );
};

export default Resume;
