import React from 'react'
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useParams } from 'react-router-dom';
import { ArticleType } from '../../types'
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
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SnackbarContent from '@mui/material/SnackbarContent';

function Article() {
  const [loading, setLoading] = React.useState(true);
  const { articleId } = useParams();

  const [article, setArticle] = React.useState<ArticleType[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
      fetchALL<ArticleType[]>("news/ua?id="+articleId)
      .then(article => setArticle(article));
      setTimeout(() => setLoading(false),600);

  }, []);

  const arr = Object.values(article)

  const today = new Date();
  const date = today.toISOString().slice(0, 10)
  const time = (today.getHours() + ":" + today.getMinutes())

  return (
  
    <Box sx={{ display: 'flex', background:'#192734'}}>
      <CssBaseline />
<Nav/>

<Box component="main" sx={{flexGrow: 1, p: 3, background:"#192734"}} >
<Banner/>
{loading === false ? (

<Container style={{minWidth:"70%",maxWidth:"70%"}}>
<IconButton color="secondary" aria-label="Go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconButton>
    <Grid id="article" container justifyContent="center"alignItems="center" textAlign="center"marginTop="20px"marginBottom="10px"border="1px solid #000" borderRadius="10px" overflow="hidden" >

      <Card style={{color:'#f5f6f7', backgroundColor: '#151E29'}}>
     
  
  <CardContent style={{}}>

  <Typography style={{color:'#f5f6f7',margin:"5px",fontFamily:"Roboto",fontSize:"1.3em", fontWeight:600, textTransform: "uppercase"}}>
  {String(arr[1])}
       </Typography>
       <CardMedia
        component="img"
        style={{
          border:"1px solid #000",
          height:"auto",
          width:"80%",
          margin:"auto",
          borderRadius:"10px", 
          overflow:"hidden"
        }}
        alt="Not Found"
        src={String(arr[2])}
      />
       <Divider style={{background:"#52edc7",marginTop:"10px",marginBottom:"10px"}} variant="middle"/>
  <List  style={{ width: '100%', textAlign:'center'}}>

<Stack spacing={2} style={{ width: '100%', margin:'5px', textAlign:'justify'}}>

      <SnackbarContent
      sx={{color:'#f5f6f7', backgroundColor: '#192734', fontSize:"15px",margin:'10px'}}
        message={arr[8]}
      />

    </Stack>

      <ListItem style={{margin:"5px"}}>
      <NewspaperIcon  style={{ marginRight:'10px', color:'#52edc7'}} />
          <Typography style={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
          Source: {arr[7]}
      </Typography>     
      </ListItem>
<ListItem style={{margin:"5px"}}>
<LanguageIcon  style={{marginRight:'10px', color:'#52edc7'}} />
<Typography style={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
Country: {arr[0]}
</Typography>
</ListItem>
<ListItem style={{margin:"5px"}}>
      <PublishedWithChangesIcon  style={{marginRight:'10px', color:'#52edc7'}} />
      <Typography style={{ fontFamily:"Roboto", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
      Published: {arr[4]&&arr[3] != null ? (arr[3]+", "+arr[4]) : (time+", "+date)}
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
      <Grid id="article" container justifyContent="center"alignItems="center" textAlign="center"marginTop="20px"marginBottom="10px">
<CardMedia 
 style={{margin:"25px"}}>
<CircularProgress sx={{color:"#52edc7"}}/>
</CardMedia>
</Grid>
       </Container>
)}

   </Box>
   </Box>

  )
    }

export default Article
