import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "@mui/material/Container"

import ClassCard from "../components/class-card/ClassCard.component"
import Jumbo from "../components/jumbo/Jumbo.component"

const imageURL =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"

const imgLocal = "./images/gatsby-astronaut.png"
const ClassPage = () => (
  <Layout>
    <Seo title="LACA" />
    <Jumbo imgSrc={imageURL} height="200px" strength={100}>
      <h2>Learn Spanish with authentic native speaking teachers.</h2>
    </Jumbo>
    <Container>
      <p>
        <h1>Test.</h1>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p>
      <ClassCard image={imageURL} />
    </Container>
  </Layout>
)

export default ClassPage
