import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form () {
    const [name, setName] = useState ('')
    const [email, setEmail] = useState ('')
    const [subject, setSubject] = useState ('')
    const [message, setMessage] = useState ('') 

    function sendEmail (e) {
      e.preventDefault ();

      if (name === "" || email === "" || subject === "" || message === "") {
        alert ("Preencha todos os campos");
        return;
      }

      const templateParams = {
        from_name: name,
        email: email,
        from_subject: subject,
        message: message
      }

      emailjs.send ("service_a1axxds", "template_sqbjodv", templateParams, "r9a33clDNlix0uIFU")
      .then ((response) => {
        console.log ("EMAIL ENVIADO", response.status, response.text)
        setName ("")
        setEmail ("")
        setSubject ("")
        setMessage ("")
      }, (err) => {
        console.log ("ERRO: ", err)
      })

      alert ("EMAIL ENVIADO")
    }


    return (
        <div>
          <form onSubmit={sendEmail}>
            <div>
              <input type="text" placeholder="Nome" onChange={(e) => setName (e.target.value)} value={name}/>
              <input type="email" placeholder="E-Mail" onChange={(e) => setEmail (e.target.value)} value={email}/>
            </div>
            <input type="text" placeholder="Assunto" onChange={(e) => setSubject (e.target.value)} value={subject}/>
            <textarea placeholder="Mensagem" onChange={(e) => setMessage (e.target.value)} value={message}/>
            <input type="submit" value="Enviar"/>
          </form>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.4264421809257!2d-43.199609800000005!3d-22.934516900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fb927177027%3A0x1076dda3d527bc4!2sR.%20Alm.%20Alexandrino%2C%203056%20-%20Santa%20Teresa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020241-266!5e0!3m2!1spt-BR!2sbr!4v1682770939284!5m2!1spt-BR!2sbr" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}