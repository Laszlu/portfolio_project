import { Cover, MusicType, Project, ProjectRole, ProjectType, ProjectVisual } from "./model.ts"

export const EmptyProject: Project = new Project(
  ProjectType.Music,
  "TITLE",
  "YEAR",
  "ARTIST",
  ["GENRE"],
  "SOURCE",
  new Cover("SOURCE", "ALT"),
  MusicType.None,
  [ProjectRole.Producing],
  [
    new ProjectVisual(
      "TITLE",
      "SOURCE",
      "ALT")
  ]
)

export const ProjectList: Project[] = [
  new Project(
    ProjectType.Music,
    "QUIT",
    "2023",
    "Kid Os",
    ["Hip Hop", "Rap"],
    "https://www.youtube.com/embed/EETlDhcz2_c",
    new Cover("https://i.imgur.com/1KUgTZk.png", "QUIT Cover"),
    MusicType.Single,
    [ProjectRole.Producing, ProjectRole.Mixing, ProjectRole.Mastering, ProjectRole.Recording],
    [
      new ProjectVisual(
        "TITLE",
        "SOURCE",
        "ALT")
    ]
  ),
  new Project(
    ProjectType.Music,
    "Snooze",
    "2023",
    "Kid Os",
    ["Hip Hop", "Rap"],
    "https://www.youtube.com/embed/8cBsleaHaXo",
    new Cover("https://i.imgur.com/W5kzoJk.png", "Snooze Cover"),
    MusicType.Single,
    [ProjectRole.Mastering],
    [
      new ProjectVisual(
        "TITLE",
        "SOURCE",
        "ALT")
    ]
  ),
  new Project(
    ProjectType.Music,
    "Cycles",
    "2023",
    "Jesse Sank",
    ["Alternative"],
    "https://www.youtube.com/embed/2prpEedFhKg?list=OLAK5uy_n5bLgZihmACa2LKSMZOgYzcTaIRYGg6fU",
    new Cover("https://i.imgur.com/7tLJwuv.png", "Cycles Cover"),
    MusicType.EP,
    [ProjectRole.Producing, ProjectRole.Recording],
    [
      new ProjectVisual(
        "TITLE",
        "SOURCE",
        "ALT")
    ]
  ),
  new Project(
    ProjectType.Music,
    "Henri Rey EP",
    "2021",
    "lny",
    ["Hip Hop", "Rap"],
    "https://www.youtube.com/embed/videoseries?list=PLBQwcOEynLDjYbF4BI2CaRURLJjda6sSb",
    new Cover("https://i.imgur.com/E9GEHBu.jpg", "Henry Rey EP Cover"),
    MusicType.EP,
    [ProjectRole.Producing, ProjectRole.Mixing, ProjectRole.Mastering, ProjectRole.Visuals, ProjectRole.Recording, ProjectRole.Songwriting],
    [
      new ProjectVisual(
        "Henri Rey EP Promo 1",
        "https://i.imgur.com/2ricpkn.jpg",
        "Henri Rey EP Promo 1")
    ]
  ),
  new Project(
    ProjectType.Music,
    "Parching Sand",
    "2021",
    "Hetaera",
    ["Alternative Rock"],
    "https://www.youtube.com/embed/WdzC7LlLTdg",
    new Cover("https://i.imgur.com/VgCmHjr.jpg", "Parching Sands Cover"),
    MusicType.Single,
    [ProjectRole.Mixing, ProjectRole.Recording],
    []
  ),
  new Project(
    ProjectType.Music,
    "Bar",
    "2021",
    "lny",
    ["Hip Hop", "Electronic"],
    "https://www.youtube.com/embed/mpgoaISBK8M",
    new Cover("https://i.imgur.com/IdLbyzq.jpg", "Bar Cover"),
    MusicType.Single,
    [ProjectRole.Producing, ProjectRole.Mixing, ProjectRole.Mastering, ProjectRole.Visuals, ProjectRole.Recording, ProjectRole.Songwriting],
    [
      new ProjectVisual(
        "TITLE",
        "SOURCE",
        "ALT")
    ]
  ),
  new Project(
    ProjectType.Music,
    "Back On This",
    "2021",
    "lny",
    ["Alternative"],
    "https://www.youtube.com/embed/QXGEdFHbuD4",
    new Cover("https://i.imgur.com/veKnaXl.jpg", "Back On This Cover"),
    MusicType.Single,
    [ProjectRole.Producing, ProjectRole.Mixing, ProjectRole.Mastering, ProjectRole.Visuals, ProjectRole.Recording, ProjectRole.Songwriting],
    [
      new ProjectVisual(
        "TITLE",
        "SOURCE",
        "ALT")
    ]
  ),
  new Project(
    ProjectType.Music,
    "Weiterziehen (feat. lny)",
    "2022",
    "Saint Miles",
    ["Hip Hop", "Rap"],
    "https://www.youtube.com/embed/UqQd0GahtuI",
    new Cover("https://i.imgur.com/RXswDpr.png", "Weiterziehen Cover"),
    MusicType.Single,
    [ProjectRole.Songwriting],
    [
      new ProjectVisual(
        "TITLE",
        "SOURCE",
        "ALT")
    ]
  ),
  new Project(
    ProjectType.Music,
    "AJ1 (feat. lny)",
    "2020",
    "Saint Miles",
    ["Hip Hop", "Rap"],
    "https://www.youtube.com/embed/SX-OPp8WV5Q",
    new Cover("https://i.imgur.com/3zrrZN9.png", "AJ1 Cover"),
    MusicType.Single,
    [ProjectRole.Songwriting],
    [
      new ProjectVisual(
        "TITLE",
        "SOURCE",
        "ALT")
    ]
  ),
  new Project(
    ProjectType.Music,
    "PAID (feat. lny)",
    "2020",
    "Saint Miles",
    ["Hip Hop", "Rap"],
    "https://www.youtube.com/embed/wscFsdughRY",
    new Cover("https://i.imgur.com/rQCHqrf.png", "PAID Cover"),
    MusicType.Single,
    [ProjectRole.Songwriting],
    [
      new ProjectVisual(
        "TITLE",
        "SOURCE",
        "ALT")
    ]
  ),
]