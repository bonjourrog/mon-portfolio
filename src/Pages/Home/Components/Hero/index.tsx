import './Hero.css';
import { HeroProps } from './props';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Hero: React.FC<HeroProps> = ()=>{
    return <section className='hero'>
        <h2 className='nick'>Bonjourog</h2>
        <div className='hero__content'>
            <p className='hero__career'>Frontend developer</p>
            <h1 className='hero__name'>Rogelio Beltran</h1>
            <p className='hero__description'>Desarrollador web experiencia en la creacion de sitios web con wordpress, angular y react, también he colaborado en proyectos en los que he trabajado como full stack con Golang, Angular y MongoDB</p>
                <button className='see-p'>
                    <p>Ver Proyectos</p>
                    <FaLongArrowAltRight/>
                </button>
        </div>
        <ul className='tech-list'>
            <li><FaReact className='tech-item'/></li>
            <li><IoLogoJavascript className='tech-item'/></li>
            <li><FaCss3 className='tech-item'/></li>
            <li><FaWordpress className='tech-item'/></li>
            <li><FaGithub className='tech-item'/></li>
        </ul>
    </section>
}
export default Hero;