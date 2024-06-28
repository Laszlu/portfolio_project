import "./Footer.css"
import { Box, Button } from "@mui/material"
import { btnWhite } from "../../assets/styles/colors.ts"

function Footer() {
  return(
    <div className={"footer-main"}>
      <Box className={"footer-box footer-box-left"}>
        © Leonard Ferreyra | All rights reserved
      </Box>
      <Box className={"footer-box footer-box-right"}>
        <a>Imprint & Privacy</a>
      </Box>
    </div>
  )
}

export default Footer;