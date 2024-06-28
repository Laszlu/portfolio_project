import { OverviewItemProps } from "../../data/Interfaces.ts"
import { Card, CardHeader, Avatar, CardMedia, CardContent, Typography, Paper } from "@mui/material"
import { Project, ProjectType } from "../../data/model.ts"
import React from "react"

function SetAvatarIcon(projectType: ProjectType) {
  switch (projectType) {
    case ProjectType.Music:
      return String.fromCodePoint(127925);
    case ProjectType.Design:
      return "&#128443;"
  }
}

function OverviewItem(props: OverviewItemProps) {
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    console.log("media clicked")
    props.setAnchor(props.anchor ? null : event.currentTarget);
    props.setProjectForPopup(props.project);
  }

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
          onClick={handleClick}
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