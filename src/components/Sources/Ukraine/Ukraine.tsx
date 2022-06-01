import React from 'react'
import { Grid } from '@mui/material';
import { fetchALL } from '../../../api'
import { UkraineArticleType } from '../../types'
import Articles from '../ArticlesList'
import Pagination from '../Pagination';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import CssBaseline from "@mui/material/CssBaseline";

function Ukraine() {
  const [news, setNews] = React.useState<UkraineArticleType[]>([]);
  
  
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(99);
  
  const [loading, setLoading] = React.useState(true);
  const handleLoading = () => {
    setLoading(false);
    }
  
  const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = (nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
  };
  
  
  React.useEffect(() => {
    fetchALL<UkraineArticleType[]>("news/ukraine?page="+page)
    .then(news => setNews(news))
    setTotalPages(totalPages);
    setTimeout(() => setLoading(false),600);
  }, [page, totalPages]);

  return (
    <>
    <CssBaseline />
    {loading===false ? (
<div>
<Grid container justifyContent="center"  marginTop="10px">

     {news.map((articles, id) => <Articles key={id} articles={articles} />)}
     </Grid>

     <Pagination
     totalPages={totalPages}
     currentPage={page}
     handlePrevPage={handlePrevPage}
     handleNextPage={handleNextPage}
   />

   </div>
      ) : (

<div style={{color:"#52edc7"}}>
<LinearProgress color="inherit" sx={{margin:"25px"}}/> 

<Pagination
     totalPages={totalPages}
     currentPage={page}
     handlePrevPage={handlePrevPage}
     handleNextPage={handleNextPage}
   />

   </div>
      )}
      </>
  )
    }

export default Ukraine
