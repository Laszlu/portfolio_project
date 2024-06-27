import "./Overview.css"
import { Box, Grid } from "@mui/material"
import { CommissionType, Cover, MusicType, Project, ProjectType } from "../../data/model.ts"
import OverviewItem from "./OverviewItem.tsx"

const Zimmer301 = new Project(
  ProjectType.Music,
  "Zimmer 301",
  "Track 4 in Henry Rey EP",
  "lny",
  "https://www.youtube.com/watch?v=bslav-vCMGU",
  CommissionType.Personal,
  new Cover("https://raw.githubusercontent.com/Laszlu/portfolio_project/master/portfolio_project/src/assets/images/Henry_Rey_EP_Cover.jpg", "Henry Rey EP Cover", "jpg"),
  MusicType.Song
)

let testSongs : Project[] = []

for (let i = 0; i < 10; i++) {
  testSongs.push(Zimmer301)
}



function Overview() {
  console.log(testSongs)
  return(
    <Box className={"overview-main"}>
      <Grid className={"overview-outer-grid"} container spacing={{xs: 2, md: 0}} columns={{xs: 4, sm: 8, md: 12}}>
        {Array.from(testSongs).map((p, index) => (
          <Grid xs={2} sm={3} md={4} key={index}>
            <OverviewItem project={p}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Overview;