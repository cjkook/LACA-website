import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Jumbo from "../components/jumbo/Jumbo.component"

// assets
import jumboUrl from "../images/WIX MTT.jpg"

const IndexPage = () => (
  <Layout>
    <Seo title="LACA" />

    {/* <Jumbo imgSrc={jumboUrl} height="400px" strength={100}>
      
    </Jumbo> */}
    <Container>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%",
            padding: 4,
          },
        }}
      >
        <Paper elevation={0}>
          <StaticImage
            src="../images/WIX MTT.jpg"
            // width={300}
            // quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem`,}}
          />
          <h1>Test.</h1>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
          <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
          <Link to="/using-dsg">Go to "Using DSG"</Link>
        </Paper>
      </Box>
    </Container>
  </Layout>
)

export default IndexPage
