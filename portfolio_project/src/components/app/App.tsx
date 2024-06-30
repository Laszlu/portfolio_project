import "./App.css";
import NavBar from "../navbar/NavBar.tsx";
import Footer from "../footer/Footer.tsx";
import Contact from "../contact/Contact.tsx"
import Imprint from "../imprint/Imprint.tsx"
import About from "../about/About.tsx"
import Overview from "../project-overview/Overview.tsx"
import { Box, CssBaseline } from "@mui/material"
import React from "react"
import { BodyState } from "../../data/model.ts"


function SwitchBodyState(state: BodyState) {
  switch (state) {
    case BodyState.Overview:
      return <Overview/>;
    case BodyState.Contact:
      return <Contact/>
    case BodyState.About:
      return <About/>
    case BodyState.Imprint:
      return <Imprint/>
  }
}

function App() {
  const [appBodyState, setAppBodyState] = React.useState(BodyState.Overview)

  return (
    <>
      <CssBaseline/>
      <NavBar appBodyState={appBodyState} setAppBodyState={setAppBodyState}/>
      <Box>
        {SwitchBodyState(appBodyState)}
      </Box>
      <Footer setAppBodyState={setAppBodyState}/>
    </>
  )
}

export default App;
