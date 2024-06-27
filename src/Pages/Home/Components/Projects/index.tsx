import './Projects.css';
import { ProjectsProps } from './Projects.props';
import { FaLongArrowAltRight } from "react-icons/fa";

const Projects: React.FC<ProjectsProps> = ()=>{
    return <section className='projects'>
    <h2 className='projects__headline'>Proyectos</h2>
    <ul className='projects__list'>
        <li className='project'>
            <p>Explora algunos de los proyectos más significativos que he desarrollado</p>
            <FaLongArrowAltRight className='project__icon'/>
        </li>
        <li className='project'>
            <a href="https://bluebaycarrental.com/" target='_blank'>
                <img src="https://res.cloudinary.com/dbquvfvvk/image/upload/v1718214667/portfolio/prurfcocftiiv5t79rbd.jpg" alt="" />
            </a>
        </li>
        <li className='project'>
            <a href="https://joyatinmobiliaria.com/" target='_blank'>
                <img src="https://res.cloudinary.com/dbquvfvvk/image/upload/v1718214840/portfolio/g03fb6t9tpetbswqfhzd.jpg" alt="" />
            </a>
        </li>
        <li className='project'>
            <a href="https://elcomedero.com.mx/" target='_blank'>
                <img src="https://res.cloudinary.com/dbquvfvvk/image/upload/v1718143364/portfolio/obgizhwqtg4rnssqhhzq.jpg" alt="" />
            </a>
        </li>
        <li className='project'>
            <a href="https://lafatburger.com/" target='_blank'>
                <img src="https://res.cloudinary.com/dbquvfvvk/image/upload/v1718215116/portfolio/fsteylcuab6auhaxirct.jpg" alt="" />
            </a>
        </li>
    </ul>
</section>
}
export default Projects;