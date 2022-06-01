/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function Author() {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
    >
        <Link color="inherit" href="https://github.com/ruslansco/pronews" target="blank"><GitHubIcon  sx={{marginTop:'10px'}} /></Link>
     
      <Link color="inherit" href="https://ruslans.net" target="blank"><PersonOutlineIcon  sx={{marginTop:'10px'}} /></Link>
    

    </Box>
  );
}