import {NavBarTabProps} from "../../data/Interfaces.ts"

function NavBarTab(props: NavBarTabProps) {
  return(
    <div className={"navbar-tab"}>
      {props.tabText}
    </div>
  )
}

export default NavBarTab;