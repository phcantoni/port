import ph from "./Assets/ph.jpeg";
import React from "react";
import sr from "./ScrollReveal";

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
      <div className="About" id="About" ref="boxOne">
       <section>
         <h2>Sobre Mim</h2>
         <p>
         Desde o meu primeiro contato com a programação eu não tive dúvidas de que seria esse o caminho que eu seguiria. Eu nunca havia estudado nenhuma área de tecnologia, mas logo fiquei fascinado. Sou muito empenhado, curioso e tenho muita facilidade em aprender. Sei HTML, CSS e JavaScript. Ainda não tenho muita experiência como desenvoldor front-end, mas tenho muita vontade de aprender e evoluir cada vez mais.
         </p>
       </section>
       <figure className="figureAbout">
         <img src={ph} alt="*" />
       </figure>
     </div>
    )
  }
}
export default RevealMe







// export default function About() {
//   return (
//     <div className="About row">
//       <section>
//         <h2>Sobre Mim</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat.
//         </p>
//       </section>
//       <figure>
//         <img src={ph} alt="*" />
//       </figure>
//     </div>
//   );
// }
