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
import { useLocation, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

interface ArticleProps {
    article: ArticleType
  }


function Article() {
    const { id } = useParams<{ id: string }>();

    return (
      <Box sx={{ margin:"10px", border: '1px solid #000',  borderRadius: "10px", overflow:"hidden"}}>

      </Box>
    );
  }

export default Article