import "./Overview.css"
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { Box, Grid } from "@mui/material"
import { CommissionType, Cover, MusicType, Project, ProjectCredit, ProjectType } from "../../data/model.ts"
import OverviewItem from "./OverviewItem.tsx"
import OverviewPopup from "./OverviewPopup.tsx"
import React from "react"

const Zimmer301 = new Project(
  ProjectType.Music,
  "Zimmer 301",
  "Track 4 in Henry Rey EP",
  [new ProjectCredit("lny", "main artist")],
  "https://www.youtube.com/embed/bslav-vCMGU",
  CommissionType.Personal,
  new Cover("https://raw.githubusercontent.com/Laszlu/portfolio_project/master/src/assets/images/Henry_Rey_EP_Cover.jpg", "Henry Rey EP Cover", "jpg"),
  MusicType.Single
)

const testSongs : Project[] = []

for (let i = 0; i < 10; i++) {
  testSongs.push(Zimmer301)
}



function Overview() {
  const [projectForPopup, setProjectForPopup] = React.useState(Zimmer301)
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchor);
  const id = open ? 'simple-popup' : undefined;

  return(
    <>
      <Box className={"overview-main"}>
        <div id={"popup-anchor"}></div>
        <Grid className={"overview-outer-grid"} container spacing={{xs: 2, md: 8}} columns={{xs: 4, sm: 8, md: 12}}>
          {Array.from(testSongs).map((p, index) => (
            <Grid item={true} xs={2} sm={4} md={4} key={index}>
              <OverviewItem
                anchor={anchor}
                setAnchor={setAnchor}
                project={p}
                projectForPopup={projectForPopup}
                setProjectForPopup={setProjectForPopup}/>
            </Grid>
          ))}
        </Grid>
      </Box>

        <BasePopup style={{ zIndex: "12000" }} id={id} open={open} anchor={anchor} offset={5}>
          <OverviewPopup
            project={projectForPopup}
            anchor={anchor}
            setAnchor={setAnchor}
          />
        </BasePopup>
    </>

  )
}

export default Overview;