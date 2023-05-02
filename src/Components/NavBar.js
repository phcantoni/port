import PH from "./Assets/LogoPH.jpg";
import Git from "./Assets/github.png";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div>
        <figure>
          <a href="_top"><img src={PH} alt="" /></a>
        </figure>
        <h3>Paulo H.</h3>
        <p>Web Developer</p>
      </div>
      <nav>
        <ul>
          <a href="#Home"><li>Home</li></a>
          <a href="#Projects"><li>Projects</li></a>
          <a href="#Skills"><li>My Skills</li></a>
          <a href="#About"><li>About</li></a>
          <a href="#Contact"><li>Contact</li></a>
        </ul>
      </nav>
      <figure>
        <a href="https://github.com/phcantoni" target="_blank"><img src={Git} alt="" /></a>
      </figure>
    </div>
  );
}
