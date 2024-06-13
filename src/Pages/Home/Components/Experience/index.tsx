import './Experience.css';
import { ExperienceProps } from "./Experience.props";

const Experience: React.FC<ExperienceProps> = ()=>{
    return <section className='experience'>
    <h2 className='experience__headline'>Experiencia</h2>
    <ul>
        <li>
            <h3>Triple i Soluciones</h3>
            <p>Desarrollador FullStack</p>
            <span>Ag 2021 - May 2022</span>
        </li>
        <li>
            <h3>Castaways</h3>
            <p>Diseñador Web</p>
            <span>Ag 2022 - Sep 2022</span>
        </li>
        <li>
            <h3>Blue Bay</h3>
            <p>Dessarrollador Web</p>
            <span>Ene 2024 - Actualmente</span>
        </li>
    </ul>
</section>
}
export default Experience;