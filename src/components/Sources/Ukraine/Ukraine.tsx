import React from 'react'
import { Grid } from '@mui/material';
import { fetchUA } from '../../../api'
import { UkraineArticleType } from '../../types'
import Article from '../Article'
import Pagination from '../../Pagination';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';

function Ukraine() {
  const [news, setNews] = React.useState<UkraineArticleType[]>([]);
  
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(99);
  
  const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = (nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
  };
  
  
  React.useEffect(() => {
    fetchUA<UkraineArticleType[]>("news/ukraine?page="+page)
    .then(news => setNews(news))
    setTotalPages(totalPages);
    setTimeout(() => setLoading(false),500);
  }, [page]);

  return (
    <>
    {loading === false ? (
<div>
<Grid container justifyContent="center"  marginTop="10px">

     {news.map((article, id) => <Article key={id} article={article} />)}
     


     <Box sx={{ display: 'flex', flexDirection: 'column',alignItems: 'center', '& > *': {m: 1,},}}>
     <ButtonGroup size="large">
     <Pagination
     totalPages={totalPages}
     currentPage={page}
     handlePrevPage={handlePrevPage}
     handleNextPage={handleNextPage}
   />
         </ButtonGroup>
         </Box>
         </Grid>
   </div>
      ) : (
<div>
<Grid container justifyContent="center" marginTop="10px" minHeight="800" minWidth="800">
   <Stack sx={{ width: '100%', color:'#52edc7', minWidth:800, margin:"50px"}} spacing={1}>
      <LinearProgress color="inherit" /> 
    </Stack>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': {m: 1,},}}>
     <ButtonGroup size="large">
     <Pagination
     totalPages={totalPages}
     currentPage={page}
     handlePrevPage={handlePrevPage}
     handleNextPage={handleNextPage}
   />
         </ButtonGroup>
         </Box>
    </Grid>
    
         </div>
      )}
      </>
  )
    }

export default Ukraine
