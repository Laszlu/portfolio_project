import { OverviewItemProps } from "../../data/Interfaces.ts"
import { Card, CardMedia, CardContent, Typography } from "@mui/material"

function OverviewItem(props: OverviewItemProps) {
  function handleClick() {
    console.log("media clicked")
    const navBar = document.querySelector("#popup-anchor")
    props.setAnchor(props.anchor ? null : (navBar as HTMLElement));
    props.setProjectForPopup(props.project);
  }

  return(
    <div className={"overview-item-main"}>
      <Card className={"overview-item-card"}>
        <CardMedia
          onClick={handleClick}
          className={"overview-item-img"}
          component="img"
          width="100"
          image={props.project.cover.source}
          alt={props.project.cover.altText}
        />
        <CardContent className={"overview-item-content"}>
          <div>
            <Typography variant={"body1"} className={"overview-item-content-text"}>
              {props.project.title}
            </Typography>
            <Typography variant={"body1"} color={"grey"} className={"overview-item-content-text"}>
              {props.project.releaseYear}
            </Typography>
          </div>
          <Typography variant={"body1"} color={"grey"} className={"overview-item-content-text"}>
            {props.project.credits[0].artist}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default OverviewItem;