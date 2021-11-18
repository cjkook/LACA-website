import * as React from "react"
import { Parallax, Background } from "react-parallax"

import "./Jumbo.styles.scss"

const Jumbo = props => (
  <Parallax
    className="image"
    bgImage={props.imgSrc}
    style={{height: `${props.height}`}}
    strength={props.strength}
  >
    <div>
      <div className="inside">{props.children}</div>
    </div>
  </Parallax>
)

export default Jumbo
