import email from "./Assets/email.png";
import telefone from "./Assets/telefone.png";
import local from "./Assets/local.png";

export default function Footer () {
    return (
        <div className="Footer">
            <h3>Portifólio produzido por Paulo Henrique de Albergaria Cantoni</h3>
            <nav>
                <ul>
                    <li><img src={email} alt="*"></img>phacantoni@gmail.com</li>
                    <li><img src={telefone} alt="*"></img>21 98393-6221</li>
                    <li><img src={local} alt="*"></img>Rua Almirante Alexandrino, 3056 - Santa Teresa - RJ</li>
                </ul>
            </nav>
        </div>
    )
}