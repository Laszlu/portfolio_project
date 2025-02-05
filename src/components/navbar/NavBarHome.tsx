import { NavBarTabProps } from "../../data/Interfaces.ts"
import { Typography } from "@mui/material"
import { BodyState } from "../../data/model.ts"

function SetTextColor(appBodyState: BodyState) {
  let classString: string;
  if(appBodyState === BodyState.Overview || appBodyState == BodyState.ProjectPage) {
    classString = "navbar-home navbar-txt-selected";
  }
  else {
    classString = "navbar-home navbar-txt-unselected";
  }

  if(appBodyState === BodyState.Overview) {
    classString += " navbar-padding-left"
  }
  else {
    classString += " navbar-home-margin"
  }

  return classString;
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