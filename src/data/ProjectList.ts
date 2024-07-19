import { Cover, MusicType, Project, ProjectType, ProjectVisual } from "./model.ts"

export const EmptyProject: Project = new Project(
  ProjectType.Music,
  "None",
  "0000",
  "none",
  "none",
  new Cover("none", "none", "none"),
  MusicType.None,
  []
)

export const ProjectList: Project[] = [
  new Project(
      ProjectType.Music,
      "Henri Rey EP",
      "2021",
      "lny",
      "https://www.youtube.com/embed/videoseries?list=PLBQwcOEynLDjYbF4BI2CaRURLJjda6sSb",
      new Cover("https://raw.githubusercontent.com/Laszlu/portfolio_project/master/src/assets/images/Henry_Rey_EP_Cover.jpg", "Henry Rey EP Cover", "jpg"),
      MusicType.Album,
      [new ProjectVisual("Henri Rey EP Cover", "https://raw.githubusercontent.com/Laszlu/portfolio_project/master/src/assets/images/Henry_Rey_EP_Cover.jpg", "Henri Rey EP Cover")]
    ),
]