import "./Overview.css"
import { Box, Grid } from "@mui/material"
import OverviewItem from "./OverviewItem.tsx"
import { ProjectList } from "../../data/ProjectList.ts"
import { OverviewProps } from "../../data/Interfaces.ts"

function Overview(props: OverviewProps) {

  return(
    <>
      <Box className={"overview-main"}>
        <div id={"popup-anchor"}></div>
        <Grid className={"overview-outer-grid"} container spacing={{xs: 2, md: 8}} columns={{xs: 4, sm: 8, md: 12}}>
          {ProjectList.map((p, index) => (
            <Grid item={true} xs={2} sm={4} md={4} key={index}>
              <OverviewItem
                project={p}
                selectedProject={props.selectedProject}
                setSelectedProject={props.setSelectedProject}
                setAppBodyState={props.setAppBodyState}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>

  )
}

export default Overview;