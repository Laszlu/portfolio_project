import "./App.css";
import NavBar from "../navbar/NavBar.tsx";
import Footer from "../footer/Footer.tsx";
import { Box, CssBaseline } from "@mui/material"
import Overview from "../project-overview/Overview.tsx"

function App() {

  return (
    <div>
      <CssBaseline/>
      <NavBar/>
      <Box>
        <Overview/>
      </Box>
      <Footer/>
    </div>
  )
}

export default App;
