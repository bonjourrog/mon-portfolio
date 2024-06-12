import Header from '../../Components/Header';
import Hero from './Components/Hero';
import './Home.css';
import { HomeProps } from './props';

const Home: React.FC<HomeProps> = ()=>{
    return <div className='home' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Header/>
        <Hero/>
        <section className='projects'>
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
    </div>
}
export default Home;