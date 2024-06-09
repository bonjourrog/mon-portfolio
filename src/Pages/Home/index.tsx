import Header from '../../Components/Header';
import Hero from './Components/Hero';
import './Home.css';
import { HomeProps } from './props';

const Home: React.FC<HomeProps> = ()=>{
    return <div className='home'>
        <Header/>
        <Hero/>
    </div>
}
export default Home;