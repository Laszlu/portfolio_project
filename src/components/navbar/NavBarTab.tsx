import {NavBarTabProps} from "../../data/Interfaces.ts"

function NavBarTab(props: NavBarTabProps) {
  return(
    <div onClick={() => props.setAppBodyState(props.stateToSet)} className={"navbar-tab"}>
      {props.tabText}
    </div>
  )
}

export default NavBarTab;