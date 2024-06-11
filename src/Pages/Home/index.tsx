import Header from '../../Components/Header';
import Hero from './Components/Hero';
import './Home.css';
import { HomeProps } from './props';

const Home: React.FC<HomeProps> = ()=>{
    return <div className='home' style={{height:"100vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Header/>
        <Hero/>
    </div>
}
export default Home;