import { OverviewItemProps } from "../../data/Interfaces.ts"
import { Card, CardHeader, Avatar, CardMedia, CardContent, Typography } from "@mui/material"
import { Project, ProjectType } from "../../data/model.ts"

function SetAvatarIcon(projectType: ProjectType) {
  switch (projectType) {
    case ProjectType.Music:
      return String.fromCodePoint(127925);
    case ProjectType.Design:
      return "&#128443;"
  }
}
// String.fromCodePoint(127900)

function OverviewItem(props: OverviewItemProps) {
  return(
    <div className={"overview-item-main"}>
      <Card>
        <CardHeader
          avatar={
            <Avatar>
              {SetAvatarIcon(props.project.projectType)}
            </Avatar>
          }
          title={props.project.title}
        />
        <CardMedia
          component="img"
          width="100"
          image={props.project.cover.source}
          alt={props.project.cover.altText}
        />
        <CardContent>
          <Typography variant={"body2"} color={"text.secondary"}>
            {props.project.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default OverviewItem;