import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BuildIcon from '@mui/icons-material/Build';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import {Link} from "react-router-dom";

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,

  },
  icon: {
    color: '#fff',
  }
});

function MenuList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
      <Link style={{ textDecoration: 'none',color:'#fff' }}
      to={`/`}>
        <ListItem button>
          <ListItemIcon className={classes.icon}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="News" />
        </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none',color:'#fff' }}
      to={`/chatroom`}>
        <ListItem button>
          <ListItemIcon className={classes.icon}>
            <DesktopMacIcon />
          </ListItemIcon>
          <ListItemText primary="Chat Room" />
        </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none',color:'#fff' }}
      to={`/search`}>
        <ListItem button>
          <ListItemIcon className={classes.icon}>
            < BuildIcon/>
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        </Link>

        <ListItem button>
          <ListItemIcon className={classes.icon}>
            <DraftsIcon />
          </ListItemIcon>

          
          <ListItemText primary="About Us" />
        </ListItem>

      </List>
      <Divider />

    </div>
  );
}

MenuList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuList);
