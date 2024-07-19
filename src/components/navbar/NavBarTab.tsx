import {NavBarTabProps} from "../../data/Interfaces.ts"
import { Typography } from "@mui/material"

function NavBarTab(props: NavBarTabProps) {
  return(
    <div onClick={() => props.setAppBodyState(props.stateToSet)} className={"navbar-tab"}>
      <Typography>
        {props.tabText}
      </Typography>
    </div>
  )
}

export default NavBarTab;