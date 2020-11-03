import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { BrowserRouter, Link } from 'react-router-dom';
import NavRouter from '../navigation/NavRouter';

import orange from '@material-ui/core/colors/orange';

const colorOrange = orange[800];

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
  buttonColor: {
    backgroundColor: colorOrange,
    marginRight: theme.spacing(2),
  },
  disabledButton: {
    backgroundColor: theme.palette.primary || 'red',
  },
  removeLink: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function TopMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    //handleClick(event);
  };

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.menuButton}>
              New Title System{' '}
            </Typography>
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              className={classes.buttonColor}
              color="primary"
              onClick={handleClick}
            >
              Open Menu
            </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem onClick={handleClose}>
                <Link key={1} className={classes.removeLink} to={`/`}>
                  <ListItemIcon>
                    <SendIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </Link>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose}>
                <Link key={2} className={classes.removeLink} to={`/About`}>
                  <ListItemIcon>
                    <DraftsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </Link>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose}>
                <Link key={3} className={classes.removeLink} to={`/MultiLoad`}>
                  <ListItemIcon>
                    <InboxIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Multi Async Loading" />
                </Link>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose}>
                <Link key={3} className={classes.removeLink} to={`/LoadTable`}>
                  <ListItemIcon>
                    <InboxIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Load Table" />
                </Link>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose}>
                <Link key={3} className={classes.removeLink} to={`/CRUDTable`}>
                  <ListItemIcon>
                    <InboxIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="CRUD Table" />
                </Link>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose}>
                <Link
                  key={3}
                  className={classes.removeLink}
                  to={`/SimpleTable`}
                >
                  <ListItemIcon>
                    <InboxIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="SIMPLE Table" />
                </Link>
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose}>
                <Link key={3} className={classes.removeLink} to={`/ExcelTable`}>
                  <ListItemIcon>
                    <InboxIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Table to Excel" />
                </Link>
              </StyledMenuItem>
              {/* <StyledMenuItem onClick={handleClose}>
                <Link key={3} className={classes.removeLink} to={`/UploadPage`}>
                  <ListItemIcon>
                    <InboxIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Upload Files" />
                </Link>
              </StyledMenuItem> */}
            </StyledMenu>
          </Toolbar>
        </AppBar>

        <main>
          <NavRouter />

          {/* <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography> */}
        </main>
      </BrowserRouter>
    </div>
  );
}
