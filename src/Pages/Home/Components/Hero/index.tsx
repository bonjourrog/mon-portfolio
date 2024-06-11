import './Hero.css';
import { HeroProps } from './props';
import { FaLongArrowAltRight } from "react-icons/fa";

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
        <ul>
            
        </ul>
    </section>
}
export default Hero;