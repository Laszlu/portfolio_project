import {NavBarTabProps} from "../../data/Interfaces.ts"

function NavBarHome(props: NavBarTabProps) {
  return(
    <div onClick={() => props.setAppBodyState(props.stateToSet)} className={"navbar-home"}>
      {props.tabText}
    </div>
  )
}

export default NavBarHome;