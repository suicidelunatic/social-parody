import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import { types } from './duck';

const SideMenuList: React.FC<types.SideMenuList> = ({ closeMenu }) => {
  return (
    <List onClick={closeMenu} style={{ width: 200 }}>
      <ListItem
        button
        exact
        activeClassName="Mui-selected"
        component={NavLink}
        to={routes.home}
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem
        button
        exact
        activeClassName="Mui-selected"
        component={NavLink}
        to={routes.addPost}
      >
        <ListItemIcon>
          <PostAddIcon />
        </ListItemIcon>
        <ListItemText primary="Add post" />
      </ListItem>
    </List>
  );
};

export default SideMenuList;