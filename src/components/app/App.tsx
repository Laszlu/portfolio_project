import "./App.css"
import NavBar from "../navbar/NavBar.tsx"
import Footer from "../footer/Footer.tsx"
import Contact from "../contact/Contact.tsx"
import Imprint from "../imprint/Imprint.tsx"
import About from "../about/About.tsx"
import Overview from "../project-overview/Overview.tsx"
import { Box, CssBaseline, Popper } from "@mui/material"
import React from "react"
import { BodyState, Project } from "../../data/model.ts"
import ProjectPage from "../project-page/ProjectPage.tsx"
import { EmptyProject } from "../../data/ProjectList.ts"
import CookieBanner from "../cookie-banner/CookieBanner.tsx"
import Cookies from "js-cookie"

function SwitchBodyState(state: BodyState,
                         selectedProject: Project,
                         setSelectedProject: React.Dispatch<React.SetStateAction<Project>>,
                         setAppBodyState: React.Dispatch<React.SetStateAction<BodyState>>) {
  switch (state) {
    case BodyState.Overview:
      return <Overview selectedProject={selectedProject}
                       setSelectedProject={setSelectedProject}
                       setAppBodyState={setAppBodyState}/>;
    case BodyState.Contact:
      return <Contact/>
    case BodyState.About:
      return <About/>
    case BodyState.Imprint:
      return <Imprint/>
    case BodyState.ProjectPage:
      return <ProjectPage project={selectedProject}/>
  }
}

function App() {
  const [appBodyState, setAppBodyState] = React.useState(BodyState.Overview);
  const [selectedProject, setSelectedProject] = React.useState(EmptyProject);
  const [cookieConsent, setCookieConsent] = React.useState(Cookies.get("cookieConsent"));

  return (
    <>
      <CssBaseline/>
      <NavBar appBodyState={appBodyState} setAppBodyState={setAppBodyState}/>
      <Box>
        {SwitchBodyState(appBodyState, selectedProject, setSelectedProject, setAppBodyState)}
      </Box>
      <Footer setAppBodyState={setAppBodyState}/>
      <Popper className={"cookie-popper"} open={cookieConsent === undefined}>
        <CookieBanner cookieConsent={cookieConsent} setCookieConsent={setCookieConsent}/>
      </Popper>
    </>
  )
}

export default App;
