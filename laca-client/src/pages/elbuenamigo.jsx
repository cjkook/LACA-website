import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "@mui/material/Container"
import Jumbo from "../components/jumbo/Jumbo.component"
import QuiltedImageList from "../components/image-quilt/image-quilt.component"

// assets
import jumboUrl from "../images/IMG_3104.jpg"

// const testUrl =
// "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"

const IndexPage = () => (
  <Layout>
    <Seo title="LACA" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <Jumbo imgSrc={jumboUrl} height="400px" strength={100}></Jumbo>
    
    <Container>
      <h1>Test.</h1>

      <QuiltedImageList></QuiltedImageList>
      {/* <StaticImage
        src="../images/49788104_2012717835444040_8062934764681691136_n.png"
        // width={300}
        // quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      /> */}
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </Container>
  </Layout>
)

export default IndexPage
