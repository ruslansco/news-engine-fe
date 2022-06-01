import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Footer() {
  return (
    <Stack spacing={2} justifyContent="center"alignItems="center" textAlign="center">
      <Pagination count={10} shape="rounded" />
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}
export default Footer;



