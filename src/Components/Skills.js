import html from "./Assets/html5.png";
import js from "./Assets/js.png";
import css from "./Assets/css3.png";
import node from "./Assets/node.png";
import react from "./Assets/react.png";
import styled from "./Assets/styled.png";
import React from "react"
import sr from "./ScrollReveal"

export class RevealMe extends React.Component {

  componentDidMount = () => {
    const config = {
      // origin: "right",
      duration: 1700,
      delay: 400,
      // distance: "43.75em",
      // scale: 1,
      // easing: "ease",
    }

    sr.reveal(this.refs.boxOne, config)
  }

  render () {
    return (
    <div className="Skills" id="Skills" ref="boxOne">
      <h2>Tecnologias</h2>
      <div>
      <section>
        <figure>
          <img src={html} alt="*" />
        </figure>
        <figure>
          <img src={css} alt="*" />
        </figure>
        <figure>
          <img src={js} alt="*" />
        </figure>
        <figure>
          <img src={react} alt="*" />
        </figure>
        <figure>
          <img src={node} alt="*" />
        </figure>
        <figure>
          <img src={styled} alt="*" />
        </figure>
      </section>
      <p>Estas são algumas das minhas habilidades e tecnologias que sei.</p>
      </div>
    </div>
    )
  }
}
export default RevealMe







// export default function Skills() {
//   return (
//     <div className="Skills row">
//       <h2>Tecnologias</h2>
//       <section>
//         <figure>
//           <img src={html} alt="*" />
//         </figure>
//         <figure>
//           <img src={css} alt="*" />
//         </figure>
//         <figure>
//           <img src={js} alt="*" />
//         </figure>
//         <figure>
//           <img src={react} alt="*" />
//         </figure>
//         <figure>
//           <img src={node} alt="*" />
//         </figure>
//         <figure>
//           <img src={styled} alt="*" />
//         </figure>
//       </section>
//     </div>
//   );
// }
