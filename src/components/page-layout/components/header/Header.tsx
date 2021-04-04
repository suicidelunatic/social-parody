import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, SwipeableDrawer, Typography, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth } from 'hooks';
import { UserMenu, SignIn, SideMenuList } from './components';

const Header: React.FC = () => {
  const { isLogged } = useAuth();

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = (state = false) => {
    setIsMenuOpened((prev) => state || !prev);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={6}>
              <Grid container alignItems="center">
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => toggleMenu()}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  Soc.Parody
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="flex-end">
                {isLogged ? <UserMenu /> : <SignIn />}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={isMenuOpened}
        onClose={() => toggleMenu(false)}
        onOpen={() => toggleMenu(true)}
      >
        <>
          <SideMenuList closeMenu={() => toggleMenu(false)} />
        </>
      </SwipeableDrawer>
    </>
  );
};

export default Header;