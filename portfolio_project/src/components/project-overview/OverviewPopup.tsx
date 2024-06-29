import { Box, Card, CardContent, CardHeader, ClickAwayListener, Typography } from "@mui/material"
import { OverviewPopupProps } from "../../data/Interfaces.ts"


const navBar = document.querySelector("#popup-anchor")

function OverviewPopup(props: OverviewPopupProps) {

  return (
    <Box className={"overview-popup-box"}>
      <ClickAwayListener onClickAway={() => props.setAnchor(props.anchor ? null : (navBar as HTMLElement))}>
        <Card className={"overview-popup-card"}>
          <CardHeader
            title={props.project.title}
          />
          <CardContent>
            <iframe width="640" height="373" src={props.project.source} title="Zimmer 301"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <Typography variant={"h5"}>Description:</Typography>
            <Typography>{props.project.description}</Typography>
            <Typography variant={"h5"}>Credits:</Typography>
            <Typography>{props.project.artist}</Typography>
          </CardContent>
        </Card>
      </ClickAwayListener>
    </Box>
  )
}

export default OverviewPopup;