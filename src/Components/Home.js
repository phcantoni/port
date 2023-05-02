import React from "react";
import sr from "./ScrollReveal";
import Curriculo from "./Curriculo.pdf";

export class RevealMe extends React.Component {

  componentDidMount = () => {
    const config = {
      // rotate: {x: 100, y: 100, z: 100},
      origin: "right",
      duration: 1400,
      delay: 600,
      distance: "43.75em",
      // scale: 1,
      // easing: "ease",
    }

    sr.reveal(this.refs.boxOne, config)
  }
  
  // typeWriter = (element) => {
  //  const arrayText = element.innerHTML.split('');
  //  element.innerHTML = ''
  //  arrayText.forEach ((letra, i) => {
  //   setTimeout (() => element.innerHTML += letra, 75 * 1);
  //  });

  // }
  
  // const title = document.querySelector ('h1')
  // typeWriter(title)

  render () {
    return (
      <div className="Home" id="Home" ref="boxOne">
        <h1>
          <span>Olá,</span>
          <span>sou o Paulo!</span>
        </h1>
        <div>
          <div>
            <p className="animationHome">Desenvolvedor front-end</p>
          </div>
          <a href={Curriculo} target="_blank"><button>Currículo</button></a>
        </div>
      </div>
    );
  }
}
export default RevealMe



// export default function Home() {
//     return (
//       <div className="Home row">
//         <h1>
//           <span>Olá,</span>
//           <span>sou o Paulo!</span>
//         </h1>
//         <div>
//           <p>Desenvolvedor front-end</p>
//           <button>Currículo</button>
//         </div>
//       </div>
//     );
//   }
  