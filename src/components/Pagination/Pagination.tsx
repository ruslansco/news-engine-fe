import React from "react";
import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-scroll';

interface Props {
  currentPage: number;
  totalPages: number;
  handleNextPage: (page: number) => void;
  handlePrevPage: (page: number) => void;
}

const useStyles = makeStyles({
    buttontext: {
        color: "#f5f6f7"
    },
    hover: {
        "&:hover": {
          border: "1px solid #40c4a4",
          color: "#52edc7",
          transition: 'all .2s ease-in-out', 
              transform: 'scale(0.95)' 
        }
    }

  });


const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage
}) => {

const classes = useStyles();

  return (
<>
<Link to="body" spy={true} smooth={true}>

   <Button
      sx={{background: "#151E29", border: "1px solid #000", margin:"5px", "&:hover": {
        border: "1px solid #40c4a4",
        color: "#52edc7",
        transition: 'all .2s ease-in-out', 
            transform: 'scale(0.95)' 
      }}}
      onClick={() => handlePrevPage(currentPage)}
      disabled={currentPage === 1}
>
<Typography color="#fff"> <ArrowBackIosNewIcon/></Typography>
    </Button>

    </Link>

    <Button disabled sx={{background: "#151E29",border: "1px solid #000", margin:"5px"}}>
      <Typography color="#fff"> Page {currentPage} of {totalPages}</Typography>
    </Button>

<Link to="body" spy={true} smooth={true}>
    <Button
      sx={{background: "#151E29",border: "1px solid #000", margin:"5px","&:hover": {
        border: "1px solid #40c4a4",
        color: "#52edc7",
        transition: 'all .2s ease-in-out', 
            transform: 'scale(0.95)' 
      }}}
      onClick={() => handleNextPage(currentPage)}
      disabled={currentPage === totalPages}
    >
       <Typography color="#fff"> <ArrowForwardIosIcon/></Typography>
    </Button>
</Link>
    </>

  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired
};

export default Pagination;
