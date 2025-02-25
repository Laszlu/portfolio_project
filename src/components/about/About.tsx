import "./About.css"
import { Box, Typography } from "@mui/material"

function About() {
  return(
    <Box className={"about-main"}>
      <Box className={"about-main-area"}>
        <img src={"https://i.imgur.com/aTwZfry.png"} />
        <Typography variant={"body1"}>hi! i'm leonard, an audio producer and engineer from munich,
          germany.<br /><br />

          music in particular has always been playing a significant role of my life. by playing different percussive
          instruments in my childhood i developed a feeling for rhythm and sound at an early stage.<br />
          at the age of 16 i started making my own music, singing and rapping on instrumentals.<br /><br />

          just two years later right after finishing school i started my studies in audio engineering at sae institute
          munich.<br />
          after learning a lot about basic to advanced audio principles i continued working in all kinds of
          professional
          studios, recording different musicians or bands and furthermore editing, mixing and mastering their
          products.<br /><br />

          after getting my diploma in audio engineering i wanted to expand my skills even further. with understanding
          arrangements and learning more about making creative decisions in electronic and acoustic compositions i was
          able to graduate with a bachelor's degree in audio production.<br /><br />

          today, besides putting together my own music under the artist name "lewis basil" i'm still working together
          with different musicians and artists creating and developing new sounds.<br /><br />

          feel free to contact me if you are interested in working together on something new.<br /><br />

          el
        </Typography>
      </Box>
    </Box>
  )
}

export default About;