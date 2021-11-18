import * as React from "react"
import { Parallax, Background } from "react-parallax"

// import "./Parallax.styles.scss"

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"

const Jumbo = () => (
  <Parallax className="image" style={{height: '500px', maxWidth: '100%', opacity: '.5'}} bgImage={image1} strength={500}>
    <div>
      <div className="inside">HTML inside the parallax</div>
    </div>
  </Parallax>
)

export default Jumbo
