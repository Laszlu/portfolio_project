import "./NavBar.css"
import NavBarTab from "./NavBarTab.tsx"
import { Box } from "@mui/material"
import NavBarHome from "./NavBarHome.tsx"

function NavBar() {
  return (
    <Box className={"navbar-main"}>
      <NavBarHome tabText={"leonardvictorluis"}/>
      <NavBarTab tabText={"About"}/>
      <NavBarTab tabText={"Contact"}/>
    </Box>
  )
}

export default NavBar;