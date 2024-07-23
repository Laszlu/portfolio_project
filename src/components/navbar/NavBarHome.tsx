import { NavBarTabProps } from "../../data/Interfaces.ts"
import { Typography } from "@mui/material"
import { BodyState } from "../../data/model.ts"

function SetTextColor(appBodyState: BodyState) {
  if(appBodyState === BodyState.Overview || appBodyState == BodyState.ProjectPage) {
    return "navbar-home navbar-txt-selected"
  }
  else {
    return "navbar-home navbar-txt-unselected"
  }
}

function NavBarHome(props: NavBarTabProps) {
  return(
    <div onClick={() => props.setAppBodyState(props.stateToSet)} className={SetTextColor(props.appBodyState)}>
      <Typography>
        {props.tabText}
      </Typography>
    </div>
  )
}

export default NavBarHome;