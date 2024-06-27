import "./App.css";
import NavBar from "../navbar/NavBar.tsx";
import Footer from "../footer/Footer.tsx";
import { Box, CssBaseline } from "@mui/material"
import Overview from "../project-overview/Overview.tsx"

function App() {

  return (
    <>
      <CssBaseline/>
      <NavBar/>
      <Box>
        <Overview/>
      </Box>
      <Footer/>
    </>
  )
}

export default App;
