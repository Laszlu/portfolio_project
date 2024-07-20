import "./Footer.css"
import { Box } from "@mui/material"
import { FooterProps } from "../../data/Interfaces.ts"
import { BodyState } from "../../data/model.ts"

function Footer(props: FooterProps) {
  return (
    <div className={"footer-main"}>
      <Box className={"footer-box"}>
        © Leonard Ferreyra | All rights reserved | <a onClick={() => props.setAppBodyState(BodyState.Imprint)}>Imprint
        & Privacy</a>
      </Box>
    </div>
  )
}

export default Footer