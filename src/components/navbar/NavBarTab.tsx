import {NavBarTabProps} from "../../data/Interfaces.ts"
import { Typography } from "@mui/material"
import { BodyState } from "../../data/model.ts"

function SetTextColor(appBodyState: BodyState, stateToSet: BodyState) {
  if(appBodyState === stateToSet) {
    return "navbar-tab navbar-txt-selected"
  }
  else {
    return "navbar-tab navbar-txt-unselected"
  }
}

function NavBarTab(props: NavBarTabProps) {
  return(
    <div onClick={() => props.setAppBodyState(props.stateToSet)} className={SetTextColor(props.appBodyState, props.stateToSet)}>
      <Typography>
        {props.tabText}
      </Typography>
    </div>
  )
}

export default NavBarTab;