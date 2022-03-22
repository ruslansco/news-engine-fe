import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { List, ListItemText, Paper } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import PublicIcon from '@mui/icons-material/Public';
import StarIcon from '@mui/icons-material/Star';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import HouseIcon from '@mui/icons-material/House';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import { AllArticleType } from '../types'
import { fetchALL } from '../../api'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const styles = () => ({

    title: {
        textAlign: "center" as  const,
        marginTop: "15px",
        marginBottom: "5px",
        fontSize: "1.5em",
        textTransform: "uppercase" as const,
        lineHeight: 1.5,
        display: "block",
        letterSpacing: "0.2px"
    },

    cellbar: {
        backgroundColor: '#52edc7',
        width: '30%',
        margin: '0 auto 10px',
        padding: '1px'
    }
  });




function Banner(props:any) {
  const [news, setNews] = React.useState<AllArticleType[]>([]);
  const [myState, setMystate] = React.useState(news)

    const { classes } = props;
    const today = new Date();
    const date = today.toISOString().slice(0, 10)
    const hours = (today.getHours())
    const time_updated = (hours>9) ? (hours-9) : (hours-9*-1)

    
     
  React.useEffect(() => {
    fetchALL<AllArticleType[]>("news/?page=1")
    .then(news => setNews(news));
  }, [news]);

  React.useEffect(()=>{
    console.log(myState, '- Has changed')
  },[myState]);

    return (
      <Grid container justifyContent="center" marginTop="20px">

       <Box sx={{maxHeight: 300, minWidth: 350,maxWidth: 350, display: 'inline-block', mx: '2px', transform: 'scale(0.9)'}}>
      <CardContent sx={{ border:"1px solid #000",borderRadius: "10px", overflow:"hidden",background: "#151E29"}}>
      <Typography  sx={{ fontSize: "1.1em", fontFamily:"Roboto Slab", lineHeight:"1.5",fontWeight:"700"}}>
        Conflict
      </Typography>
      <div  className={classes.cellbar}></div>
      <List
      sx={{ width: '100%', textAlign:'left', maxWidth: 360, minHeight: 220,maxHeight: 220}}
      aria-label="contacts"
    >
      <ListItem  disableGutters divider dense>
      <AirplanemodeActiveIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
          <Typography sx={{ color:'#f5f6f7', marginLeft:'0.3em'}}>
          On 24 February 2022, Russia began a military invasion of Ukraine, in a major escalation of the Russo-Ukrainian conflict that began in 2014. 
      </Typography>     
      </ListItem>
      <ListItem  disableGutters divider dense>
      <PublicIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
<Typography sx={{ color:'#f5f6f7', marginLeft:'0.3em'}}>
Internationally considered a war of aggression, it is the biggest assault on a European state since World War II.
</Typography>
</ListItem>

<ListItem  disableGutters divider dense>
<Typography sx={{ color:'#f5f6f7', marginLeft:'0.3em'}}>

</Typography>
</ListItem>

    </List>
      </CardContent>
    </Box>

    <Box sx={{maxHeight: 300, minWidth: 350,maxWidth: 350, display: 'inline-block', mx: '2px', transform: 'scale(0.9)'}}>

      <CardContent sx={{ border:"1px solid #000",borderRadius: "10px", overflow:"hidden",background: "#151E29"}}>
      <Typography  sx={{ fontSize: "1.1em", fontFamily:"Roboto Slab", lineHeight:"1.5",fontWeight:"700"}}>
        Live News
      </Typography>
      <div  className={classes.cellbar}></div>
      <div style={{minHeight: 220,maxHeight: 220, minWidth: 335,maxWidth: 335, overflow: 'auto', overflowY: "hidden", fontSize:"14px"}}>
      {React.Children.toArray(news.map((article) => 
<ListItem disableGutters divider dense>
<ArrowRightAltIcon   sx={{marginRight:'5px', color:'#52edc7'}} />
          <Typography sx={{ color:'#f5f6f7', paddingRight:"2px"}}>
          {((article.title).length < 80) ? ((article.title).trimEnd()+".") : ((article.title).substring(0,77)+"..")}
      </Typography>     
      </ListItem>

  
    ))}
      </div>

      </CardContent>

    </Box>

  
    <Box sx={{maxHeight: 300, minWidth: 350,maxWidth: 350,display: 'inline-block', mx: '2px', transform: 'scale(0.9)'}}>

      <CardContent sx={{ border:"1px solid #000",borderRadius: "10px", overflow:"hidden",background: "#151E29"}}>
      <Typography  sx={{ fontSize: "1.1em", fontFamily:"Roboto Slab", lineHeight:"1.5",fontWeight:"700"}}>
        Estimated Losses
      </Typography>
      <div  className={classes.cellbar}></div>
      <List
      sx={{ width: '100%', textAlign:'left', maxWidth: 360}}
      aria-label="contacts"
    >
      <ListItem   divider dense sx={{marginLeft:'1em'}}>
            <StarIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
          <Typography sx={{ color:'#f5f6f7', marginLeft:'0.3em'}}>
        Deaths: At least 19K
      </Typography>     
      </ListItem>
      <ListItem   divider dense sx={{marginLeft:'1em'}}>
<DirectionsRunIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
<Typography sx={{ color:'#f5f6f7', marginLeft:'0.3em'}}>
Displaced: Approx. 10 M
</Typography>
</ListItem>

<ListItem   divider dense sx={{marginLeft:'1em'}}>
<LocalPharmacyIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
<Typography sx={{ color:'#f5f6f7', marginLeft:'0.3em'}}>
Non-fatal injuries: 1.9K
</Typography>
</ListItem>

<ListItem   divider dense sx={{marginLeft:'1em'}}>
<HouseIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
<Typography sx={{ color:'#f5f6f7', marginLeft:'0.3em'}}>
Buildings destroyed: 1.7K
</Typography>
</ListItem>

<ListItem  divider dense sx={{marginLeft:'1em'}}>
<LocalAtmIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
<Typography sx={{ color:'#f5f6f7', marginLeft:'0.3em'}}>
Property damage: $119B
</Typography>
</ListItem>
    </List>
    <Typography variant="body2" sx={{ color:'#1976d2'}}>
    <Link href="https://www.reuters.com/" color="inherit">
        {'From Reuters'}
      </Link>
  {" · Updated "}{time_updated}{" hours ago  · "}
      </Typography>
      </CardContent>

    </Box>

     </Grid>

    
    );
    }

Banner.propTypes = {
        classes: PropTypes.object.isRequired,
      };

export default withStyles(styles)(Banner);
/*

<CardMedia
    component="img"
    image={require('../../assets/uk.jpg')}
    alt="we stand united"
  />
*/