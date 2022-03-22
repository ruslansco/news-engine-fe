import * as React from 'react';
import Grid from '@mui/material/Grid';
import BodyTabs from './Tabs'

function Body() {

    return (

      <Grid id="body" container spacing={2} justifyContent="center"alignItems="center" textAlign="center"marginTop="20px"marginBottom="10px">
<BodyTabs/>
</Grid>
    );
  }

  export default Body;