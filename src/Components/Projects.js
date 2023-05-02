import backgroundOne from "./Assets/toDeCachos.png";
import backgroundTwo from "./Assets/starWars.png";
import backgroundThree from "./Assets/beat.png";
import seta from "./Assets/setaCima.png";
import React from "react"
import sr from "./ScrollReveal"

export class RevealMe extends React.Component {

  componentDidMount = () => {
    const config = {
      // rotate: {x: 100, y: 100, z: 100},
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
    <div className="Projects" id="Projects" ref="boxOne">
      <h2>Projetos</h2>
      <p>
      Uma pequena galeria de projetos recentes feitos por mim. É apenas uma gota no oceano em comparação com os projetos que pretendo ainda fazer na carreira de desenvolvedor front-end.
      </p>
      <section>
        <div>
          <figure style={{ backgroundImage: `url(${backgroundOne})` }}>
            <div className="projectsFigureDiv">
              <p>Projeto #ToDeCachos</p>
              <div>
                <a href="https://phcantoni.github.io/crespoProject/" target="_blank"><button>Projeto</button></a>
                <a href="https://github.com/phcantoni/crespoProject" target="_blank"><button>Repositório</button></a>
              </div>
            </div>
          </figure>
          <h3>#ToDeCachos</h3>
        </div>
        <div>
          <figure style={{ backgroundImage: `url(${backgroundTwo})` }}>
            <div className="projectsFigureDiv">
              <p>Projeto Star Wars</p>
              <div>
                <a href="https://phcantoni.github.io/starWarsProject/" target="_blank"><button>Projeto</button></a>
                <a href="https://github.com/phcantoni/starWarsProject" target="_blank"><button>Repositório</button></a>
              </div>
            </div>
          </figure>
          <h3>Star Wars</h3>
        </div>
        <div>
          <figure style={{ backgroundImage: `url(${backgroundThree})` }}>
            <div className="projectsFigureDiv">
              <p>Projeto Beat</p>
              <div>
                <a href="https://phcantoni.github.io/beat/" target="_blank"><button>Projeto</button></a>
                <a href="https://github.com/phcantoni/beat" target="_blank"><button>Repositório</button></a>
              </div>
            </div>
          </figure>
          <h3>Beat</h3>
        </div>
      </section>
      <button><a href="*" target="_top"><img src={seta}></img></a></button>
    </div>
    )
  }
}
export default RevealMe











// export default function Projects() {
//   return (
//     <div className="Projects row" ref='box1'>
//       <h2>Projetos</h2>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//         commodo consequat.
//       </p>
//       <section>
//         <div>
//           <figure style={{ backgroundImage: `url(${backgroundOne})` }}></figure>
//           <h3>#ToDeCachos</h3>
//         </div>
//         <div>
//           <figure style={{ backgroundImage: `url(${backgroundTwo})` }}></figure>
//           <h3>Star Wars</h3>
//         </div>
//         <div>
//           <figure
//             style={{ backgroundImage: `url(${backgroundThree})` }}
//           ></figure>
//           <h3>Beat</h3>
//         </div>
//       </section>
//     </div>
//   );
// }
