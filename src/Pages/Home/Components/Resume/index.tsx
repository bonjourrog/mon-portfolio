import './Resume.css';
import { ResumeProps } from './Resume.props';
import { FaRegFilePdf } from "react-icons/fa6";

const Resume:React.FC<ResumeProps> = ()=>{
    const handleDownload = ()=>{
        const link = document.createElement('a');
        link.href = `/Rogelio_Beltran.pdf`;
        link.target = '_blank';
        link.download;
        link.click();
    }
    return <section className='resume'>
        <div className='resume__card'>
            <h2 className='resume__headline'>Descarga mi curriculum</h2>
            <p className='resume__caption'>Conoce mi trayectoria profesional y habilidades técnicas en detalle</p>
            <button className='resume__download' onClick={handleDownload}>
                <FaRegFilePdf/>
                Descargar
            </button>
        </div>
    </section>
}
export default Resume;