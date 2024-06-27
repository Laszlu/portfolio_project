import { OverviewItemProps } from "../../data/Interfaces.ts"
import { Card, CardHeader, Avatar, CardMedia, CardContent, Typography } from "@mui/material"
import { Project, ProjectType } from "../../data/model.ts"

function SetAvatarIcon(projectType: ProjectType) {
  switch (projectType) {
    case ProjectType.Music:
      return "U+1F39C";
    case ProjectType.Design:
      return "&#128443;"
  }
}

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
          height="150"
          image={require(props.project.cover.source).default}
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