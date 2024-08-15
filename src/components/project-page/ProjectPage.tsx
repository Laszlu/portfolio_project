import "./ProjectPage.css"
import { Box, Typography } from "@mui/material"
import { ProjectPageProps } from "../../data/Interfaces.ts"
import { MusicType } from "../../data/model.ts"
import RoleBadge from "./RoleBadge.tsx"
import ProjectVisualElement from "./ProjectVisual.tsx"

function SetProjectType(musicType: MusicType) {
  switch (musicType) {
    case MusicType.Album:
      return "Album";
    case MusicType.EP:
      return "EP";
    case MusicType.ConceptEP:
      return "Concept EP"
    case MusicType.Single:
      return "Single";
    case MusicType.None:
      return "";
  }
}

function ProjectPage(props: ProjectPageProps) {
  return(
    <Box className={"project-page-main"}>
      <div className={"project-page-embed-container"}>
        <iframe src={props.project.source} title={props.project.title}
                frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"/>
      </div>
      <div className={"project-page-info"}>
        <Typography variant={"h4"}>
          {props.project.releaseYear} {SetProjectType(props.project.musicType)}
        </Typography>
        <Typography variant={"h3"}>
          {props.project.title}
        </Typography>
        <Typography variant={"h4"} color={"gray"}>
          {props.project.artist}
        </Typography>
      </div>
      <Box className={"project-page-badge-box"}>
        {props.project.roles.map((r) => (
          <RoleBadge role={r}/>
        ))}
      </Box>
      <Box className={"project-visual-box"}>
        {props.project.visuals.map((v) => (
          <ProjectVisualElement visual={v}/>
        ))}
      </Box>
    </Box>
  )
}

export default ProjectPage;