import "./Imprint.css"
import { Box, Typography } from "@mui/material"

function Imprint() {
  return (
    <Box className={"imprint-main"}>
      <Typography variant={"h3"}>
        imprint & privacy
      </Typography>
      <Box className={"imprint-main-area"}>
        <Typography variant={"h5"}>Owner:</Typography>
        <Typography variant={"body1"}>
          Leonard Ferreyra<br />
          contact@leonardvictorluis.com
        </Typography>
        <Typography variant={"h6"}>Developed By:</Typography>
        <Typography variant={"body1"}>
          Laszlo Ferreyra<br />
          maurice.ferreyra@gmail.com
        </Typography>
        <a href="https://www.iubenda.com/privacy-policy/41054876" target={"_blank"}
           className="iubenda-black iubenda-noiframe iubenda-embed iub-legal-only iubenda-noiframe "
           title="Privacy Policy ">Privacy Policy</a><br />
        <a href="https://www.iubenda.com/privacy-policy/41054876/cookie-policy" target={"_blank"}
           className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy ">Cookie
          Policy</a>
      </Box>
    </Box>
  )
}

export default Imprint