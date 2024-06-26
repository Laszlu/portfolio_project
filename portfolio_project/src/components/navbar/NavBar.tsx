import "./NavBar.css"
import NavBarTab from "./NavBarTab.tsx"
import { Box } from "@mui/material"
import NavBarHome from "./NavBarHome.tsx"

function NavBar() {
  return (
    <Box className={"navbar-main"}>
      <NavBarHome tabText={"Leonard Ferreyra"}/>
      <NavBarTab tabText={"About"}/>
      <NavBarTab tabText={"Contact"}/>
      <NavBarTab tabText={"Imprint"}/>
    </Box>
  )
}

export default NavBar;