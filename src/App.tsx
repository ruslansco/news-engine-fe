import React from "react";
import './App.css';
import { styled, useTheme, Theme, CSSObject} from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes, Outlet, Link  } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Article from './components/Pages/Article'
import WorldArticle from './components/Pages/WorldArticle'
import NoMatch from './components/Pages/NoMatch'
import Home from './components/Pages/Home'
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#192734"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

function App() {
  const [light, setLight] = React.useState(false);
  
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/news/:articleCountry/:articleId" element={<Article />} />
<Route path="/news/world/:articleTitle" element={<WorldArticle />} />
<Route path="*" element={<NoMatch />} />
</Routes>

</ThemeProvider>
  );
}

export default App;


