import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ArticleType } from '../types'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { List, ListItemText } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import LanguageIcon from '@mui/icons-material/Language';
import Divider from '@mui/material/Divider';

interface ArticleProps {
    article: ArticleType
  }


const styles = () => ({

     cellbar: {
         backgroundColor: '#52edc7',
         width: '30%',
         margin: '0 auto 10px',
         padding: '1px'
     }
   });

function Article({ article }: ArticleProps) {
  const today = new Date();
  const date = today.toISOString().slice(0, 10)
  const time = (today.getHours() + ":" + today.getMinutes())

    return (
      <Box sx={{ margin:"10px", border: '1px solid #000',  borderRadius: "10px", overflow:"hidden"}}>
      <Card sx={{minWidth: 345,maxWidth: 345, minHeight: 400, maxHeight: 400, color:'#f5f6f7', backgroundColor: '#151E29'}}>
        <CardMedia
          component="img"
          height="160"
          image={article.image}
          alt="green iguana"
          sx={{ borderBottom: '1px solid #000'}}
        />
  <CardContent sx={{minHeight: 150,maxHeight: 150}}>
  <Typography sx={{minHeight: 80,maxHeight: 80,minWidth: 300,maxWidth: 345,color:'#f5f6f7', fontFamily:"Roboto", letterSpacing: "0.4px",fontSize:"15px", fontWeight:500, textTransform: "uppercase"}}>
        {((article.title).length < 97) ? ((article.title).trimEnd()+".") : ((article.title).substring(0,94))+"..."}
       </Typography>
       <Divider sx={{background:"#52edc7",marginBottom:"10px"}}/>

  <List disablePadding sx={{ width: '100%', textAlign:'center'}}>
      <ListItem dense>
      <NewspaperIcon  sx={{ marginRight:'10px', color:'#52edc7'}} />
          <Typography sx={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
          {(article.source)}
      </Typography>     
      </ListItem>
 

<ListItem dense>
<LanguageIcon  sx={{marginRight:'10px', color:'#52edc7'}} />
<Typography sx={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"16px", fontWeight: 500}}>
{(article.country)}
</Typography>
</ListItem>
<ListItem dense>
      <PublishedWithChangesIcon  sx={{marginRight:'10px', color:'#52edc7'}} />
      <Typography sx={{ fontFamily:"Roboto Slab", color:'#f5f6f7', marginLeft:'0.2em',  fontSize:"15px", fontWeight: 500}}>
        {article.time&&article.date != null ? (article.time+", "+article.date) : (time+", "+date)}
      </Typography>
</ListItem>
    </List>
      </CardContent>
   
      </Card>
  
      </Box>
    );
  }

export default Article