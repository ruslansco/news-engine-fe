import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ArticlesType } from '../types'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { List } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import LanguageIcon from '@mui/icons-material/Language';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

interface ArticlesProps {
    articles: ArticlesType
  }


  
function Articles({ articles }: ArticlesProps) {
  const [loading, setLoading] = React.useState(true);
  const handleLoading = () => {
    setLoading(false);
    }

  const today = new Date();
  const date = today.toISOString().slice(0, 10)
  const time = (today.getHours() + ":" + today.getMinutes())
  
  React.useEffect(()=>{
    setTimeout(() => setLoading(false),600);
    },[])

    return (
      <>

  <Link style={{ textDecoration: 'none' }}
      to={((articles.country!="World") ? `/news/${(articles.country).toLowerCase()}/${articles.id}` : `/news/world/${articles.title}`)}>

      <Box sx={{ margin:"10px", border: '1px solid #000',  borderRadius: "10px", overflow:"hidden", "&:hover": {
        border: "1px solid #40c4a4",
        color: "#52edc7",
        transition: 'all .2s ease-in-out', 
            transform: 'scale(0.95)' 
      }}}>
         <Card style={{minWidth: 320,maxWidth: 320, minHeight: 400, maxHeight: 400, color:'#f5f6f7', backgroundColor: '#151E29'}}>
  {loading === false ? (
        <div>
        <CardMedia
          component="img"
          height="160"
          image={articles.image}
          alt="Not Found"
          style={{ borderBottom: '1px solid #000'}}
        />
    </div>
  ):(
    <>    
    <Card style={{minWidth: 320,maxWidth: 320, minHeight: 400, maxHeight: 400, color:'#f5f6f7', backgroundColor: '#151E29'}}>
<CardMedia 
 style={{margin:"25px"}}>
<CircularProgress sx={{color:"#52edc7"}}/>
</CardMedia>
  

        <CardContent style={{minHeight: 150,maxHeight: 150}}>
  <Typography style={{minHeight: 95,maxHeight: 95,minWidth: 300,maxWidth: 345,color:'#f5f6f7', fontFamily:"Roboto", letterSpacing: "0.2px",fontSize:"15px", fontWeight:500, textTransform: "uppercase"}}>
        {((articles.title).length < 127) ? ((articles.title).trimEnd()) : ((articles.title).substring(0,124))+"..."}
       </Typography>

       <Divider style={{background:"#52edc7",marginBottom:"10px"}} variant="middle"/>
  <List disablePadding style={{ width: '100%', textAlign:'center'}}>
      <ListItem dense>
      <NewspaperIcon  style={{ marginRight:'10px', color:'#52edc7'}} />
          <Typography style={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
          {(articles.source)}
      </Typography>     
      </ListItem>

<ListItem dense>
<LanguageIcon  style={{marginRight:'10px', color:'#52edc7'}} />
<Typography style={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
{(articles.country)}
</Typography>
</ListItem>
<ListItem dense>
      <PublishedWithChangesIcon  style={{marginRight:'10px', color:'#52edc7'}} />
      <Typography style={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"15px", fontWeight: 500}}>
        {articles.time&&articles.date != null ? (articles.time+", "+articles.date) : (time+", "+date)}
      </Typography>
</ListItem>
    </List>
      </CardContent>
        </Card>
        </>
  )}

  <CardContent style={{minHeight: 150,maxHeight: 150}}>
  <Typography style={{minHeight: 95,maxHeight: 95,minWidth: 300,maxWidth: 345,color:'#f5f6f7', fontFamily:"Roboto", letterSpacing: "0.2px",fontSize:"15px", fontWeight:500, textTransform: "uppercase"}}>
        {((articles.title).length < 127) ? ((articles.title).trimEnd()) : ((articles.title).substring(0,124))+"..."}
       </Typography>

       <Divider style={{background:"#52edc7",marginBottom:"10px"}} variant="middle"/>
  <List disablePadding style={{ width: '100%', textAlign:'center'}}>
      <ListItem dense>
      <NewspaperIcon  style={{ marginRight:'10px', color:'#52edc7'}} />
          <Typography style={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
          {(articles.source)}
      </Typography>     
      </ListItem>

<ListItem dense>
<LanguageIcon  style={{marginRight:'10px', color:'#52edc7'}} />
<Typography style={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
{(articles.country)}
</Typography>
</ListItem>
<ListItem dense>
      <PublishedWithChangesIcon  style={{marginRight:'10px', color:'#52edc7'}} />
      <Typography style={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"15px", fontWeight: 500}}>
        {articles.time&&articles.date != null ? (articles.time+", "+articles.date) : (time+", "+date)}
      </Typography>
</ListItem>
    </List>
      </CardContent>
   
      </Card>
  
      </Box>
      </Link>

        </>


    
    );
  }

export default Articles