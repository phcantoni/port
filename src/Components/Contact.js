import Form from "./Form"
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
      <div className="Contact" id="Contact" ref="boxOne">
        <h2>Contato</h2>
        <p>Estou em busca de oportunidades de estágio ou trabalho como web developer. No entanto, se você tiver outra solicitação ou pergunta, não hesite em usar o formulário.</p>
        {/* <div>
          <form>
            <div>
              <input type="text" placeholder="Nome"/>
              <input type="email" placeholder="E-Mail"/>
            </div>
            <input type="text" placeholder="Assunto"/>
            <textarea placeholder="Mensagem"/>
            <button>Enviar</button>
          </form>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.4264421809257!2d-43.199609800000005!3d-22.934516900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fb927177027%3A0x1076dda3d527bc4!2sR.%20Alm.%20Alexandrino%2C%203056%20-%20Santa%20Teresa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020241-266!5e0!3m2!1spt-BR!2sbr!4v1682770939284!5m2!1spt-BR!2sbr" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> */}
        <Form />
      </div>
    );
  }
}
export default RevealMe




// export default function Contact() {
//     return (
//       <div className="Contact row">
//         <h2>Contato</h2>
//         <div>
//           <form>
//             <div>
//               <input type="text" placeholder="Nome"/>
//               <input type="email" placeholder="E-Mail"/>
//             </div>
//             <input type="text" placeholder="Assunto"/>
//             <textarea placeholder="Mensagem"/>
//             <button>Enviar</button>
//           </form>
//           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.4264421809257!2d-43.199609800000005!3d-22.934516900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fb927177027%3A0x1076dda3d527bc4!2sR.%20Alm.%20Alexandrino%2C%203056%20-%20Santa%20Teresa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020241-266!5e0!3m2!1spt-BR!2sbr!4v1682770939284!5m2!1spt-BR!2sbr" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//         </div>
//       </div>
//     );
//   }
  