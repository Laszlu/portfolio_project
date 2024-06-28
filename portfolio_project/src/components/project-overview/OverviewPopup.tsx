import { Box, Card, CardHeader, CardMedia } from "@mui/material"
import { OverviewPopupProps } from "../../data/Interfaces.ts"

function OverviewPopup(props: OverviewPopupProps) {
  return(
    <Box className={"overview-popup-box"}>
      <Card>
        <CardHeader
          title={props.project.title}
        />
        <CardMedia
          component={"iframe"}
          src={props.project.source}
        />
      </Card>
    </Box>
  )
}

export default OverviewPopup;