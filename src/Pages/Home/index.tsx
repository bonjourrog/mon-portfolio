import Header from '../../Components/Header';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import './Home.css';
import { HomeProps } from './props';

const Home: React.FC<HomeProps> = ()=>{
    return <div className='home' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Header/>
        <Hero/>
        <Projects/>
    </div>
}
export default Home;