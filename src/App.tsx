import React, { Fragment } from 'react';
import './App.css';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Grid } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import MenuList from './components/Sidebar';
import Banner from './components/Banner';
import Body from './components/Body'
import Button from '@mui/material/Button';
import Time from './components/Sidebar/Time'
import Footer from './components/Footer'



const drawerWidth = 220;
const useStyles = makeStyles({
  topbar: {
      background: "#192734",
      borderTop: "1px solid #000",
      borderBottom: "1px solid #000",
      borderRight: "1px solid #000",
      color: "#f5f6f7"
  },
  content: {
      background: "#151E29",
      color: "#fff"
  },
  sidebar: {
    background: "#151E29",
  },
  sidebarItem: {
      borderBottom: "1px solid #000",
  },
  sidebarIcon: {
      color: "#fff",
  },
  menuText: {
    color: "#fff",
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "15px",
    paddingLeft: "2em",
  },
  menuItemText: {
    borderBottom: 0,
    color: "inherit",
    cursor: "pointer",
    display: "block",
    letterSpacing: "0.075em",
    fontFamily: "Open Sans"
  },
  icon: {
    color: "fff",
  },
  media: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    objectPosition: "bottom"
  }
});


const StyledDiv = styled('div')(({ theme }) => ({
  backgroundColor: '#192734',
  color: '#fff'
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const BorderBar = styled('div')(({ theme }) => ({
  backgroundColor: '#52edc7',
  width: '70%',
  margin: '5px auto',
  padding: '1px'

}));


function App() {

const theme = useTheme();
const [open, setOpen] = React.useState(false);
const classes = useStyles();

const handleDrawerOpen = () => {
  setOpen(true);
};

const handleDrawerClose = () => {
  setOpen(false);
};

  return (
    
    <Fragment>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar  className={classes.topbar}>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>ProNews Live Data</Typography>

          <Button color="inherit"><Time/></Button>
        </Toolbar>


      </AppBar>

      <Drawer
        variant="permanent" open={open} PaperProps={{
          sx: {
            backgroundColor: "#151E29",
            color: "#fff",
            border:"1px solid #000"
          }
        }}>

        <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
        </DrawerHeader>
<Divider />
<MenuList/>

<Divider />
      </Drawer>



      <StyledDiv>

      <Box  component="main" sx={{flexGrow: 1, p: 3 }} >
      <DrawerHeader />

      <Grid container spacing={2} justifyContent="center"alignItems="center" textAlign="center"marginTop="20px"marginBottom="10px">
   <Banner/>
<BorderBar/>
<Body/>
<Footer/>

    </Grid>
    </Box>

   </StyledDiv>
   </Box>
   </Fragment>
  );
}

export default App;
