import './Home.css';
import Header from '../../Components/Header';
import Experience from './Components/Experience';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import { HomeProps } from './props';
import Contact from './Components/Contact';
import Resume from './Components/Resume';

const Home: React.FC<HomeProps> = ()=>{
    
    return <div className='home' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Header/>
        <Hero/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Resume/>
    </div>
}
export default Home;