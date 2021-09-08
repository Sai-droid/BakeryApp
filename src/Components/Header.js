import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {MenuIcon} from '@material-ui/icons/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {Menu,MenuItem }from '@material-ui/core';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import HomePage from './HomePage';
import BreadPage from './BreadPage';
import {BrowserRouter as Router , Switch, Link, Route, Redirect } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
           <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
             {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
            <MenuSharpIcon />
          {/* </IconButton> */}
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><Link to ="/login">Login</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to ="/about">AboutUs</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to ="/customer">Customer</Link></MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
          <Typography variant="h6" className={classes.title}>
            Bakery
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    
    </div>
    
  );
}
