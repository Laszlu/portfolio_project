import { OverviewItemProps } from "../../data/Interfaces.ts"
import { Card, CardMedia, CardContent, Typography } from "@mui/material"
import { BodyState } from "../../data/model.ts"

function OverviewItem(props: OverviewItemProps) {
  function handleClick() {
    console.log("cover clicked");
    props.setSelectedProject(props.project);
    props.setAppBodyState(BodyState.ProjectPage)
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
            <Typography variant={"body1"} className={"overview-item-content-text"}>
              {props.project.releaseYear}
            </Typography>
          </div>
          <Typography variant={"body1"} className={"overview-item-content-text"}>
            {props.project.artist}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default OverviewItem;