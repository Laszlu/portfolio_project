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
      "")]
)

export const ProjectList: Project[] = [
  new Project(
    ProjectType.Music,
    "Flowers Blooming Close To Dreams Far From Decay",
    "2024",
    "Lewis Basil",
    ["Lofi Pop"],
    "https://www.youtube.com/embed/videoseries?list=PL4nsCxc8Ld-dRN21oCKh0xvPqugMzjg9_",
    new Cover("https://i.imgur.com/sVuDvmK.png", "Flowers Blooming Cover"),
    MusicType.ConceptEP,
    [ProjectRole.Producing, ProjectRole.Mixing, ProjectRole.Mastering, ProjectRole.Visuals, ProjectRole.Recording, ProjectRole.Songwriting],
    [
      new ProjectVisual(
        "Flowers Blooming Cover Gif",
        "https://i.imgur.com/t8YdYxu.gif"),
      new ProjectVisual(
        "Flowers Blooming Back Gif",
        "https://i.imgur.com/PVJxpe8.gif"),
      new ProjectVisual("Flowers Blooming Poster 1 Gif",
        "https://i.imgur.com/325quZX.gif"),
      new ProjectVisual("Flowers Blooming Poster 2 Gif",
        "https://i.imgur.com/SZctjAG.gif")
    ]
  ),
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
        "")]
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
        "")]
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
        "")]
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
        "")]
  ),
  new Project(
    ProjectType.Music,
    "Lately",
    "2022",
    "The Juice Band",
    ["Jazz", "Pop"],
    "https://www.youtube.com/embed/BbNAHY_OaLI",
    new Cover("https://i.imgur.com/DmYELJa.png", "Lately Cover"),
    MusicType.Single,
    [ProjectRole.Mixing, ProjectRole.Mastering, ProjectRole.Recording],
    [
      new ProjectVisual(
        "TITLE",
        "")]
  ),
  new Project(
    ProjectType.Music,
    "Parching Sand (Remix)",
    "2022",
    "Hetaera",
    ["Synth Wave"],
    "https://www.youtube.com/embed/DpHZ11FuE0k",
    new Cover("https://i.imgur.com/LGpanXl.png", "Parching Sand (Remix) Cover"),
    MusicType.Single,
    [ProjectRole.Producing, ProjectRole.Mixing, ProjectRole.Mastering, ProjectRole.Visuals],
    [
      new ProjectVisual(
        "TITLE",
        "")]
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
        "Henri Rey EP Gif",
        "https://i.imgur.com/FyAa4QS.gif"),
      new ProjectVisual(
        "Henri Rey Promo 2",
        "https://i.imgur.com/U2pzcf2.png"),
      new ProjectVisual(
        "Henri Rey Promo 1",
        "https://i.imgur.com/2ricpkn.png"),
      new ProjectVisual(
        "Henri Rey Promo 6",
        "https://i.imgur.com/CdzW4a2.jpg"),
      new ProjectVisual(
        "Henri Rey Promo 4",
        "https://i.imgur.com/Vpx5k4c.jpg"),
      new ProjectVisual(
        "Henri Rey Promo 5",
        "https://i.imgur.com/wRJmlzV.jpg"),
      new ProjectVisual(
        "Henri Rey Promo 3",
        "https://i.imgur.com/UHGdvd1.jpg")
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
    [
      new ProjectVisual(
        "TITLE",
        "")]
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
        "Bar Gif",
        "https://i.imgur.com/frhuEwM.gif")]
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
        "Back On This Promo 1",
        "https://i.imgur.com/dyMrVra.jpg"),
      new ProjectVisual(
        "Back On This Promo 2",
        "https://i.imgur.com/hF9ed3O.jpg")
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
        "")]
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
        "")]
  ),
]