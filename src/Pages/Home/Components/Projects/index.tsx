import './Projects.css';
import { ProjectsProps } from './Projects.props';

const Projects: React.FC<ProjectsProps> = ()=>{
    return <section className='projects'>
    <h2 className='projects__headline'>Proyectos</h2>
    <ul className='projects__list'>
        <li className='project'>
            <img src="https://res.cloudinary.com/dbquvfvvk/image/upload/v1718214667/portfolio/prurfcocftiiv5t79rbd.jpg" alt="" />
        </li>
        <li className='project'>
            <img src="https://res.cloudinary.com/dbquvfvvk/image/upload/v1718214840/portfolio/g03fb6t9tpetbswqfhzd.jpg" alt="" />
        </li>
        <li className='project'>
            <img src="https://res.cloudinary.com/dbquvfvvk/image/upload/v1718143364/portfolio/obgizhwqtg4rnssqhhzq.jpg" alt="" />
        </li>
        <li className='project'>
            <img src="https://res.cloudinary.com/dbquvfvvk/image/upload/v1718215116/portfolio/fsteylcuab6auhaxirct.jpg" alt="" />
        </li>
    </ul>
</section>
}
export default Projects;