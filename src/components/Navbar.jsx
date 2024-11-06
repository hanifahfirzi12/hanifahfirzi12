import '../styles/Navbar.css'
import { FaBarsProgress } from "react-icons/fa6";

function Navbar() {

  return (
    <nav>
        <div className="wrapper">
            <div className="logo">
                <a href=""> HANIFAH FIRZI</a>
            </div>
            <button><FaBarsProgress  /></button>
            <div className="menu">
                <ul> 
                    <li><a href="#portfolio">Portofolio</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar