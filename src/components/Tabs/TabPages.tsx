import * as React from 'react';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import { makeStyles } from "@material-ui/core/styles";
import Ukraine from '../Sources/Ukraine'
import Russia from '../Sources/Russia'
import World from '../Sources/World';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  button: {
      background: "#151E29",
      border: "1px solid #000",
      color: "#fff",
      borderRadius: "0.375em",
      cursor: "pointer",
      display: "inline-block",
      fontSize: "0.9em",
      fontWeight: 700,
      height: "3.5em",
      letterSpacing: "0.075em",
      lineHeight: "3.5em",
      padding: "0 2.25em",
      margin: "5px",
      textAlign: "center",
      textTransform: "uppercase",
      fontFamily: "Roboto Slab"
  },
hover: {
    "&:hover": {
      border: "1px solid #40c4a4",
      color: "#52edc7",
      transition: 'all .2s ease-in-out', 
		  transform: 'scale(0.95)' 
    }
}
});

function TabPages() {
  const classes = useStyles();


  return (
    <Container >
      <Grid id="body" container spacing={2} justifyContent="center"alignItems="center" textAlign="center"marginTop="20px"marginBottom="10px">
<TabsUnstyled defaultValue={0}>
      <TabsListUnstyled> 
        <TabUnstyled className={[classes.button, classes.hover].join(" ")}>Ukraine News</TabUnstyled>
        <TabUnstyled className={[classes.button, classes.hover].join(" ")}>Russia News</TabUnstyled>
        <TabUnstyled className={[classes.button, classes.hover].join(" ")}>World News</TabUnstyled>
      </TabsListUnstyled>
  <TabPanelUnstyled value={0}><Ukraine/></TabPanelUnstyled>
      <TabPanelUnstyled value={1}><Russia/></TabPanelUnstyled>
      <TabPanelUnstyled value={2}><World/></TabPanelUnstyled>
    </TabsUnstyled>
    </Grid>
    </Container>

  )
}
  export default TabPages;