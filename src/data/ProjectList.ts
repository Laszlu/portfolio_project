import { CommissionType, Cover, MusicType, Project, ProjectCredit, ProjectType } from "./model.ts"

export const EmptyProject: Project = new Project(
  ProjectType.Music,
  "none",
  "none",
  "0000",
  [new ProjectCredit("none", "none")],
  "none",
  CommissionType.Personal,
  new Cover("none", "none", "none"),
  MusicType.None
)

export const ProjectList: Project[] = [
  new Project(
      ProjectType.Music,
      "Henri Rey EP",
      "Henry Rey EP, 9 Tracks",
    "2021",
      [new ProjectCredit("lny", "main artist")],
      "https://www.youtube.com/embed/videoseries?list=PLBQwcOEynLDjYbF4BI2CaRURLJjda6sSb",
      CommissionType.Personal,
      new Cover("https://raw.githubusercontent.com/Laszlu/portfolio_project/master/src/assets/images/Henry_Rey_EP_Cover.jpg", "Henry Rey EP Cover", "jpg"),
      MusicType.Single
    ),
]