import "./Overview.css"
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { Box, Grid } from "@mui/material"
import OverviewItem from "./OverviewItem.tsx"
import OverviewPopup from "./OverviewPopup.tsx"
import React from "react"
import { ProjectList, EmptyProject } from "../../data/ProjectList.ts"

function Overview() {
  const [projectForPopup, setProjectForPopup] = React.useState(EmptyProject)
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchor);
  const id = open ? 'simple-popup' : undefined;

  return(
    <>
      <Box className={"overview-main"}>
        <div id={"popup-anchor"}></div>
        <Grid className={"overview-outer-grid"} container spacing={{xs: 2, md: 8}} columns={{xs: 4, sm: 8, md: 12}}>
          {ProjectList.map((p, index) => (
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