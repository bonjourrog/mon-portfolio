import './Contact.css';
import { ContactProps } from './Contact.props';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact:React.FC<ContactProps> = ()=>{
    const validateSchema = Yup.object().shape({
        from_name:Yup.string().required("Ingrese su nombre").min(3, "El nombre es demasiado corto"),
        reply_to:Yup.string().required("Ingrese un correo").email("Ingrese un correo valido"),
        message: Yup.string().required("Ingrese un mensaje").min(10, "El mensaje es demasiado corto")
    });
    return <section className='contact'>
    <Formik initialValues={{from_name:'', reply_to:'', message:''}} validationSchema={validateSchema} onSubmit={(values, {resetForm, setSubmitting})=>{
        emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, values, import.meta.env.VITE_PUBLIC_ID).then(()=>{
            setSubmitting(false)
            resetForm()
        }).catch(error=>{
            console.log("error sending email ", error);
            
        });
        
    }}>
        <div>
            <Form className='form'>
                <h2 className='contact__headline'>Contacto</h2>
                <Field className='form__field' name='from_name' type='text' placeholder='Nombre'/>
                <ErrorMessage component={'span'} className='error-msg' name='from_name'/>
                <br />
                <Field className='form__field' name='reply_to' type='email' placeholder='Correo'/>
                <ErrorMessage component={'span'} className='error-msg' name='reply_to'/>
                <br />
                <Field className='form__field form__field--textarea' name='message' type='text' component='textarea' placeholder='Mensaje'/>
                <ErrorMessage component={'span'} className='error-msg' name='message'/>
                <button type='submit'>Enviar</button>
            </Form>
            <div className='socials'>
                <h2>Socials</h2>
                <div>
                    <a href="">
                        <FaLinkedin className='socials__icon'/>
                    </a>
                    <a href="">
                        <FaGithubSquare className='socials__icon'/>
                    </a>
                    <a href="">
                        <FaInstagramSquare className='socials__icon'/>
                    </a>
                </div>
            </div>
        </div>
    </Formik>
</section>
}
export default Contact;