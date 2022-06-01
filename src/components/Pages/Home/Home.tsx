import React from "react";
import Box from '@mui/material/Box';
import Banner from './Banner'
import TabPages from './Tabs'
import Nav from '../../Nav'
import { BrowserRouter as Router, Route, Routes, Outlet, Link  } from "react-router-dom";

function Home() {

  return (

<Box sx={{ display: 'flex' }}>
<Nav/>
<Box component="main" sx={{flexGrow: 1, p: 3}} >
   <Banner/>
   <TabPages/>
   </Box>
   <Outlet />
   
   </Box>
  )
    }

export default Home
