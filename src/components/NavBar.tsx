import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Hidden,
  ButtonGroup,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  navBarLogo: {
    height: 50,
    margin: 0,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {},
  title: {
    flexGrow: 1,
  },
  navlinks: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

    width: '100%',
  },
  disableLinkColor: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  navlink: {
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    textTransform: 'none',
    fontWeight: 300,
  },
  logo: {
    '&:hover': {
      background: 'transparent',
    },
  },
});

const NavBar: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [onHomePage, setOnHomePage] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const currentPath = location.pathname;
    setOnHomePage(currentPath === '/');
  }, [location]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="md">

        <Toolbar disableGutters>

          <div className={classes.navlinks}>
            <Hidden xsDown>
              <ButtonGroup
                variant="text"
                aria-label="text primary button group"
              >
                <Button component={Link} to="/resume">
                  <Typography variant="h6" className={classes.navlink}>
                    Resume
                  </Typography>
                </Button>
                <Button component={Link} to="/blog">
                  <Typography variant="h6" className={classes.navlink}>
                    Blog
                  </Typography>
                </Button>
              </ButtonGroup>
            </Hidden>
            <Hidden smUp>
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon fontSize="large" />
              </IconButton>

              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to="/resume">
                  <Typography variant="body1">Resume</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/blog">
                  <Typography variant="body1">Blog</Typography>
                </MenuItem>
              </Menu>
            </Hidden>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
