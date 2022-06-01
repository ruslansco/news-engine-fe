import React from 'react'
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useParams } from 'react-router-dom';
import { WorldArticleType } from '../../types'
import { fetchALL, fetchEN } from '../../../api'
import Nav from '../../Nav'
import Banner from '../Home/Banner'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import { List } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import LanguageIcon from '@mui/icons-material/Language';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SnackbarContent from '@mui/material/SnackbarContent';

function WorldArticle() {
  const [loading, setLoading] = React.useState(true);
  const { articleTitle } = useParams();
  const [article, setArticle] = React.useState<WorldArticleType[]>([]);
  const navigate = useNavigate();



  React.useEffect(() => {
    fetchEN<WorldArticleType[]>("news/world?q="+articleTitle+"&page=1")
    .then(article => setArticle(article));
    setTimeout(() => setLoading(false),600);

  }, []);


const obj = article.find(o => o.title === articleTitle);

  const today = new Date();
  const date = today.toISOString().slice(0, 10)
  const time = (today.getHours() + ":" + today.getMinutes())

  return (
  
    <Box sx={{ display: 'flex', background:'#192734'}}>
      <CssBaseline />
<Nav/>

<Box component="main" sx={{flexGrow: 1, p: 3, background:"#192734"}} >
<Banner/>
{(loading === false&&obj!=null) ? (

<Container style={{minWidth:"70%",maxWidth:"70%"}}>
<IconButton color="secondary" aria-label="Go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconButton>

    <Grid id="article" container justifyContent="center"alignItems="center" textAlign="center"marginTop="20px"marginBottom="10px"border="1px solid #000">

      <Card style={{color:'#f5f6f7', backgroundColor: '#151E29'}}>
      
      <CardMedia
        component="img"
        sx={{
          border:"1px solid #000",
          height:"auto",
          width:"80%",
          margin:"auto",
          borderRadius:"10px", 
          overflow:"hidden"
        }}
        alt="Not Found"
        src={obj.image}
      />
  <CardContent style={{}}>
  <Typography style={{color:'#f5f6f7', fontFamily:"Roboto",fontSize:"1.5em", fontWeight:600, textTransform: "uppercase", margin:"5px"}}>
  {obj.title}
       </Typography>

       <Divider style={{background:"#52edc7",marginTop:"10px"}} variant="middle"/>
  <List  style={{ width: '100%', textAlign:'center'}}>
 
  <Stack spacing={2} style={{ width: '100%', margin:'5px', textAlign:'justify'}}>

<SnackbarContent
sx={{color:'#f5f6f7', backgroundColor: '#192734', fontSize:"15px",margin:'10px'}}
  message={obj.text}
/>

</Stack>
        
<ListItem style={{margin:"5px"}}>
<LanguageIcon  style={{marginRight:'10px', color:'#52edc7'}} />
<Typography style={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
Read the rest on <a style={{color:"#fff"}} href={obj.link}>{obj.source}</a>
</Typography>
</ListItem>
<ListItem style={{margin:"5px"}}>
      <NewspaperIcon  style={{ marginRight:'10px', color:'#52edc7'}} />
          <Typography style={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
          Source: {obj.source}
      </Typography>     
      </ListItem>
<ListItem style={{margin:"5px"}}>
<LanguageIcon  style={{marginRight:'10px', color:'#52edc7'}} />
<Typography style={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
Country: {obj.country}
</Typography>
</ListItem>
<ListItem style={{margin:"5px"}}>
      <PublishedWithChangesIcon  style={{marginRight:'10px', color:'#52edc7'}} />
      <Typography style={{ fontFamily:"Roboto", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
      Published: {obj.time&&obj.date != null ? (obj.time+", "+obj.date) : (time+", "+date)}
      </Typography>
</ListItem>
    </List>
      </CardContent>
   
      </Card>

    
    </Grid>
    </Container>
) : (
  <Container>
    <IconButton color="secondary" aria-label="Go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconButton>
      <Grid justifyContent="center"  marginTop="10px">
  <div style={{color:"#52edc7",textAlign:"center"}}>
<LinearProgress color="inherit" sx={{margin:"25px"}}/> 
   </div>
</Grid>
       </Container>
)}

   </Box>
   </Box>

  )
    }

export default WorldArticle
