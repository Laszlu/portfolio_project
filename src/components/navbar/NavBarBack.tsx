import { NavBarTabProps } from "../../data/Interfaces.ts"
import { Typography } from "@mui/material"

function NavBarHome(props: NavBarTabProps) {
  return(
    <div onClick={() => props.setAppBodyState(props.stateToSet)} className={"navbar-back navbar-txt-unselected"}>
      <Typography>
        {props.tabText}
      </Typography>
    </div>
  )
}

export default NavBarHome;