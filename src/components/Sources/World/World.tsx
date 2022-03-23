import React from 'react'
import { Grid } from '@mui/material';
import { fetchEN } from '../../../api'
import { WorldArticleType } from '../../types'
import Articles from '../Articles'
import Pagination from '../../Pagination';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';


function World() {
  const [news, setNews] = React.useState<WorldArticleType[]>([]);
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
    fetchEN<WorldArticleType[]>("news/world?page="+page)
    .then(news => setNews(news))
    setTotalPages(totalPages);
    setTimeout(() => setLoading(false),500);
  }, [page, totalPages]);
  


return (
  <>
  {loading === false ? (
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

<div>
<Grid container justifyContent="center"  marginTop="10px">

<LinearProgress color="inherit" /> 
     </Grid>

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

export default World
