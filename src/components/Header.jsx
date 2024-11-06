import profilePicture from '../assets/profile-picture.png'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";



import '../styles/Header.css'
function Header() {
  return (
<header>
    <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Hanifah Firzi</h3>
        <p>Progremmer - Data Analys</p>
        <div className='socialMedia'>
        <a href='https://www.instagram.com/molly.xxa_/' target="_blank" rel="noopener noreferrer">
            <FaInstagram />
        </a>
            <a href='https://github.com/hanifahfirzi' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href='https://www.tiktok.com/@cat_lcvers18?lang=id-ID' target="_blank" rel="noopener noreferrer"><FaTiktok  />


            </a>
        </div>
    </div>
</header>  
)
}

export default Header