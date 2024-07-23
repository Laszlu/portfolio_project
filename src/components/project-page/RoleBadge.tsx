import "./ProjectPage.css"
import { Box, Typography } from "@mui/material"
import { ProjectRole } from "../../data/model.ts"
import { RoleBadgeProps } from "../../data/Interfaces.ts"

function SetText(role: ProjectRole) {
  switch (role) {
    case ProjectRole.Producing:
      return "producing";
    case ProjectRole.Mixing:
      return "mixing";
    case ProjectRole.Mastering:
      return "mastering";
    case ProjectRole.Visuals:
      return "visuals";
    case ProjectRole.Recording:
      return "recording";
    case ProjectRole.Songwriting:
      return "songwriting";
  }
}

function RoleBadge(props: RoleBadgeProps) {
  return(
    <Box className={"role-badge"}>
      <Typography>{SetText(props.role)}</Typography>
    </Box>
  )
}

export default RoleBadge;