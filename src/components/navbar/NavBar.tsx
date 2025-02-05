import "./NavBar.css"
import NavBarTab from "./NavBarTab.tsx"
import { Box } from "@mui/material"
import NavBarHome from "./NavBarHome.tsx"
import NavBarBack from "./NavBarBack.tsx"
import { NavBarProps } from "../../data/Interfaces.ts"
import { BodyState } from "../../data/model.ts"

function NavBar(props: NavBarProps) {

  if(props.appBodyState === BodyState.Overview) {
    return (
      <Box className={"navbar-main"} id={"cookie-popup-anchor"}>
        <NavBarHome
          tabText={"leonardvictorluis"}
          stateToSet={BodyState.Overview}
          appBodyState={props.appBodyState}
          setAppBodyState={props.setAppBodyState}
        />
        <NavBarTab
          tabText={"about"}
          stateToSet={BodyState.About}
          appBodyState={props.appBodyState}
          setAppBodyState={props.setAppBodyState}
        />
        <NavBarTab
          tabText={"contact"}
          stateToSet={BodyState.Contact}
          appBodyState={props.appBodyState}
          setAppBodyState={props.setAppBodyState}
        />
      </Box>
    )
  } else {
    return (
      <Box className={"navbar-main"} id={"cookie-popup-anchor"}>
        <NavBarBack
          tabText={"go back"}
          stateToSet={BodyState.Overview}
          appBodyState={props.appBodyState}
          setAppBodyState={props.setAppBodyState}
        />
        <NavBarHome
          tabText={"leonardvictorluis"}
          stateToSet={BodyState.Overview}
          appBodyState={props.appBodyState}
          setAppBodyState={props.setAppBodyState}/>
        <NavBarTab
          tabText={"about"}
          stateToSet={BodyState.About}
          appBodyState={props.appBodyState}
          setAppBodyState={props.setAppBodyState}
        />
        <NavBarTab
          tabText={"contact"}
          stateToSet={BodyState.Contact}
          appBodyState={props.appBodyState}
          setAppBodyState={props.setAppBodyState}
        />
      </Box>
    )
  }

}

export default NavBar;