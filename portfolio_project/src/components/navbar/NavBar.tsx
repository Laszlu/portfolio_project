import "./NavBar.css"
import NavBarTab from "./NavBarTab.tsx"
import { Box } from "@mui/material"
import NavBarHome from "./NavBarHome.tsx"
import { NavBarProps } from "../../data/Interfaces.ts"
import { BodyState } from "../../data/model.ts"

function NavBar(props: NavBarProps) {
  return (
    <Box className={"navbar-main"}>
      <NavBarHome
        tabText={"leonardvictorluis"}
        stateToSet={BodyState.Overview}
        appBodyState={props.appBodyState}
        setAppBodyState={props.setAppBodyState}
      />
      <NavBarTab
        tabText={"About"}
        stateToSet={BodyState.About}
        appBodyState={props.appBodyState}
        setAppBodyState={props.setAppBodyState}
      />
      <NavBarTab
        tabText={"Contact"}
        stateToSet={BodyState.Contact}
        appBodyState={props.appBodyState}
        setAppBodyState={props.setAppBodyState}
      />
    </Box>
  )
}

export default NavBar;