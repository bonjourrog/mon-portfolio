import './Hero.css';
import { HeroProps } from './props';

const Hero: React.FC<HeroProps> = ()=>{
    return <section className='hero'>
        <h1 className='hero__name'>Rogelio Beltran</h1>
        <p className='hero__career'>Frontend developer</p>
        <p className='hero__description'>Desarrollador web experiencia en la creacion de sitios web con wordpress, angular y react, también he colaborado en proyectos en los que he trabajado como full stack con Golang, Angular y MongoDB</p>
    </section>
}
export default Hero;