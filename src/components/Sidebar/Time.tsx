import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';

function Time() {

    const [time, setTime] = React.useState(new Date());
   
     React.useEffect(() => {
       setInterval(() => {
        setTime(new Date());
       }, 1000);
     }, []);
   

     const date = time.toLocaleDateString()
     const local_time = time.toLocaleTimeString()

    return(
      <Container>
        <Grid item xs>
          <Typography variant="body2">
          {local_time}
          </Typography>

          <Typography variant="body2">
          {date} CDT
          </Typography>
        </Grid>
    </Container>);
}
export default Time;