import {NavBarTabProps} from "../../data/Interfaces.ts"

function NavBarHome(props: NavBarTabProps) {
  return(
    <div className={"navbar-home"}>
      {props.tabText}
    </div>
  )
}

export default NavBarHome;