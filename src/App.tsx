import React, { Fragment } from 'react';
import './App.css';
import { styled, useTheme, Theme, CSSObject} from '@mui/material/styles';

import Box from '@mui/material/Box';
import Nav from './components/Nav'
import Banner from './components/Banner'
import TabPages from './components/Tabs'

function App() {


  const StyledSection = styled('section')(({ theme }) => ({
    background: '#192734',
    color: '#fff'
  }));

  const BorderBar = styled('div')(({ theme }) => ({
    backgroundColor: '#52edc7',
    width: '70%',
    margin: '5px auto',
    padding: '1px'
  
  }));

  return (

    <Fragment>

<Box sx={{ display: 'flex' }}>
<Nav/>
  <Box component="main" sx={{flexGrow: 1, p: 3, background:"#192734"}} >
   <Banner/>
   <BorderBar/>
<TabPages/>
   </Box>
     </Box>
   </Fragment>

  );
}

export default App;
