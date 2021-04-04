import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useAuth } from 'hooks';

const UserMenu: React.FC = () => {
  const { logOut } = useAuth();

  const [anchor, setAnchor] = useState<null | Element>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget as Element);
  };

  const closeMenu = () => {
    setAnchor(null);
  };

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={openMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        getContentAnchorEl={null}
        open={!!anchor}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>Profile</MenuItem>
        <MenuItem onClick={logOut}>Log Out</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;