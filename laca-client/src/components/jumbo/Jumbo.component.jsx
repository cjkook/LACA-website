import * as React from "react"
import { Parallax } from "react-parallax"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"

import "./Jumbo.styles.scss"

const Jumbo = props => (
  <Parallax
    className="image"
    bgImage={props.imgSrc}
    style={{ height: `${props.height}` }}
    strength={props.strength}
  >
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        align: "center",
        "& > :not(style)": {
          m: 1,
          width: "90%",
          height: 256,
        },
      }}
    >
      {props.children ? (
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <Paper
              variant="outlined"
              className="inside"
              sx={{ bgcolor: "primary.secondary" }}
            >
              {props.children}
            </Paper>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      ) : null}
    </Box>
  </Parallax>
)

export default Jumbo
