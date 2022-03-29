import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import { List} from '@mui/material';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import PublicIcon from '@mui/icons-material/Public';
import StarIcon from '@mui/icons-material/Star';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import HouseIcon from '@mui/icons-material/House';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import { AllArticleType } from '../../../types'
import { fetchALL } from '../../../../api'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { styled, useTheme, Theme, CSSObject} from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

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

  const BorderBar = styled('div')(({ theme }) => ({
    backgroundColor: '#52edc7',
    width: '70%',
    margin: '5px auto',
    padding: '1px'
  
  }));
  


function Banner(props:any) {
  const [news, setNews] = React.useState<AllArticleType[]>([]);
  const [myState, setMystate] = React.useState(news)

    const { classes } = props;
    const today = new Date();
    const hours = (today.getHours())
    const minutes = (today.getMinutes())
    const time_updated = (hours>9) ? (hours-9) : (hours-9*-1)
    const engine_updated = (minutes>24) ? (minutes-24) : (minutes-24*-1)
    /*
  React.useEffect(() => {
    fetchALL<AllArticleType[]>("news/?page=1")
    .then(news => setNews(news));
     setMystate(myState);
  }, [news, myState]);

  React.useEffect(()=>{
    console.log(myState, '- Has changed')
  },[myState]);
*/
    return (
      <Grid container spacing={2} justifyContent="center"alignItems="center" textAlign="center"marginTop="35px"marginBottom="10px">

<Box sx={{ minWidth: 350,maxWidth: 350,display: 'inline-block', mx: '2px', transform: 'scale(0.9)'}}>

      <CardContent sx={{minHeight: 300, maxHeight: 300,  border:"1px solid #000",borderRadius: "10px", overflow:"hidden",background: "#151E29"}}>
      <Typography  style={{ fontSize: "1.1em", fontFamily:"Roboto Slab", lineHeight:"1.5",fontWeight:"700", color:"#fff"}}>
        Project Objectives
      </Typography>
      <div  className={classes.cellbar}></div>
      <List
      style={{ width: '100%', textAlign:'left', maxWidth: 360}}
      aria-label="contacts"
    >
      
<ListItem disableGutters  divider dense >
<LanguageIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
<Typography style={{ color:'#f5f6f7', marginLeft:'0.3em',fontFamily:"Roboto Slab", fontSize:"15px"}}>
Crawl major Ukrainian, Russian & World's major media conglomerates.
</Typography>
</ListItem>

<ListItem disableGutters  divider dense >
<GTranslateIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
<Typography style={{ color:'#f5f6f7', marginLeft:'0.3em',fontFamily:"Roboto Slab", fontSize:"15px"}}>
Scrape & translate new articles using Google-Translate API every 30 min.
</Typography>
</ListItem>
      <ListItem disableGutters dense>
            <LocalHospitalIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
          <Typography style={{ color:'#f5f6f7', marginLeft:'0.1em',fontFamily:"Roboto Slab", fontSize:"15px"}}>
        Enable people stay up to date with news written in Ukrainian & Russian.
      </Typography>     
      </ListItem>
      <ListItem  disableGutters divider dense >
<HelpCenterIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
<Typography style={{ color:'#f5f6f7', marginLeft:'0.3em',fontFamily:"Roboto Slab", fontSize:"15px"}}>
Facilitate spotting misinformation.
</Typography>
</ListItem>

    </List>
    <Typography variant="body2" sx={{ color:'#1976d2'}}>
  {" · Updated Articles "}{engine_updated}{" minutes ago  · "}
      </Typography>
      </CardContent>
    </Box>

       <Box sx={{ minWidth: 350, maxWidth: 350, display: 'inline-block', mx: '2px', transform: 'scale(0.9)'}}>
      <CardContent sx={{ minHeight: 300, maxHeight: 300, border:"1px solid #000",borderRadius: "10px", overflow:"hidden",background: "#151E29"}}>
      <Typography  style={{ fontSize: "1.1em", fontFamily:"Roboto Slab", lineHeight:"1.5",fontWeight:"700", color:"#fff"}}>
        Conflict
      </Typography>
      <div  className={classes.cellbar}></div>
      <List
      sx={{ width: '100%', textAlign:'left', maxWidth: 360, minHeight: 220,maxHeight: 220}}
      aria-label="contacts"
    >

     
      <ListItem  disableGutters divider dense>
      <AirplanemodeActiveIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
          <Typography style={{ color:'#f5f6f7', marginLeft:'0.3em',fontFamily:"Roboto Slab", fontSize:"15px"}}>
          On 24 February 2022, Russia began a military invasion of Ukraine, the attack is internationally considered a war of aggression. 
      </Typography>     
      </ListItem>
      <ListItem  disableGutters divider dense>
      <PublicIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
<Typography style={{ color:'#f5f6f7', marginLeft:'0.3em',fontFamily:"Roboto Slab", fontSize:"15px"}}>
It has triggered Europe's largest refugee crisis since World War II, with more than 3.8 million Ukrainians leaving the country, and millions more internally displaced.{" "}
<Link href="https://en.wikipedia.org/wiki/2022_Russian_invasion_of_Ukraine" style={{fontFamily:"Roboto",fontSize:"14px"}}>
        {'Wikipedia'}
      </Link>
</Typography>

</ListItem>

<ListItem  disableGutters divider dense>
<Typography sx={{ color:'#f5f6f7', marginLeft:'0.3em'}}>

</Typography>
</ListItem>

    </List>
      </CardContent>
    </Box>
{/* 
    <Box sx={{maxHeight: 300, minWidth: 350,maxWidth: 350, display: 'inline-block', mx: '2px', transform: 'scale(0.9)'}}>

      <CardContent sx={{ border:"1px solid #000",borderRadius: "10px", overflow:"hidden",background: "#151E29"}}>
      <Typography  style={{ fontSize: "1.1em", fontFamily:"Roboto Slab", lineHeight:"1.5",fontWeight:"700", color:"#fff"}}>
        Live News
      </Typography>
      <div  className={classes.cellbar}></div>
      <div style={{minHeight: 220,maxHeight: 220, minWidth: 335,maxWidth: 335, overflow: 'auto', overflowY: "hidden", fontSize:"14px"}}>
      {React.Children.toArray(news.map((article) => 
<ListItem disableGutters divider dense>
<ArrowRightAltIcon   sx={{marginRight:'5px', color:'#52edc7'}} />
          <Typography style={{ color:'#f5f6f7', paddingRight:"2px"}}>
          {((article.title).length < 80) ? ((article.title).trimEnd()+".") : ((article.title).substring(0,77)+"..")}
      </Typography>     
      </ListItem>

  
    ))}
      </div>

      </CardContent>

    </Box>
*/}
  
    <Box sx={{minWidth: 350,maxWidth: 350,display: 'inline-block', mx: '2px', transform: 'scale(0.9)'}}>

      <CardContent sx={{ minHeight: 300, maxHeight: 300, border:"1px solid #000",borderRadius: "10px", overflow:"hidden",background: "#151E29"}}>
      <Typography  style={{ fontSize: "1.1em", fontFamily:"Roboto Slab", lineHeight:"1.5",fontWeight:"700", color:"#fff"}}>
        Estimated Losses
      </Typography>
      <div  className={classes.cellbar}></div>
      <List
      style={{ width: '100%', textAlign:'left', maxWidth: 360}}
      aria-label="contacts"
    >
      <ListItem   divider dense style={{marginLeft:'1em'}}>
            <StarIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7',fontFamily:"Roboto Slab", fontSize:"15px"}} />
          <Typography style={{ color:'#f5f6f7', marginLeft:'0.3em'}}>
        Deaths: At least 23K
      </Typography>     
      </ListItem>
      <ListItem   divider dense sx={{marginLeft:'1em'}}>
<DirectionsRunIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
<Typography style={{ color:'#f5f6f7', marginLeft:'0.3em',fontFamily:"Roboto Slab", fontSize:"15px"}}>
Displaced: Approx. 10M
</Typography>
</ListItem>

<ListItem   divider dense sx={{marginLeft:'1em'}}>
<LocalPharmacyIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
<Typography style={{ color:'#f5f6f7', marginLeft:'0.3em',fontFamily:"Roboto Slab", fontSize:"15px"}}>
Non-fatal injuries: 1.9K
</Typography>
</ListItem>

<ListItem   divider dense sx={{marginLeft:'1em'}}>
<HouseIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
<Typography style={{ color:'#f5f6f7', marginLeft:'0.3em',fontFamily:"Roboto Slab", fontSize:"15px"}}>
Buildings destroyed: 1.7K
</Typography>
</ListItem>

<ListItem  divider dense sx={{marginLeft:'1em'}}>
<LocalAtmIcon  sx={{ mb: 0.5, marginRight:'5px', color:'#52edc7'}} />
<Typography style={{ color:'#f5f6f7', marginLeft:'0.3em',fontFamily:"Roboto Slab", fontSize:"15px"}}>
Property damage: $565B
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
    <BorderBar/>
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