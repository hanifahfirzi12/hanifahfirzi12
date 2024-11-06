import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";




function About() {
  return (
<section id="about">
    <div className='wrapper'>
        <h3>About</h3>
        <p>"Halo, saya Hanifah Firzi, seorang Mahasiswa Teknologi Informasi yang berfokus pada pengembangan website dan aplikasi mobile. Saat ini, saya sedang menempuh studi di jurusan Teknologi Informasi di Politeknik Negeri Padang. Dengan keahlian dalam desain UI/UX, saya berkomitmen untuk menciptakan pengalaman digital yang menarik, responsif, dan mudah digunakan, baik di perangkat besar maupun kecil. Saya senang menggabungkan kreativitas dan teknologi untuk menghasilkan solusi digital yang intuitif dan memuaskan pengguna."</p>
        <h4>Programming Language & Tools</h4>
        <div className='skills'>
    
        <FaHtml5 />
        <FaCss3 />
        <FaPhp />
        <FaLaravel />
        <RiFlutterFill />
        <FaFigma />
        <SiAdobeillustrator />
        <SiAdobephotoshop />
        <FaJs />
        <FaBootstrap />







        </div>
    </div>
</section>  )
}

export default About