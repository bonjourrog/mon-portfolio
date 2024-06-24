import './Contact.css';
import { ContactProps } from './Contact.props';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

const Contact:React.FC<ContactProps> = ()=>{
    const validateSchema = Yup.object().shape({
        name:Yup.string().required("Ingrese su nombre").min(3, "El nombre es demasiado corto"),
        email:Yup.string().required("Ingrese un correo").email("Ingrese un correo valido"),
        message: Yup.string().required("Ingrese un mensaje").min(10, "El mensaje es demasiado corto")
    });
    return <section className='contact'>
    <Formik initialValues={{name:'', email:'', message:''}} validationSchema={validateSchema} onSubmit={(values, {resetForm, setSubmitting})=>{
        console.log(values);
        resetForm()
        setSubmitting(true)
        
    }}>
        <div>
            <Form className='form'>
                <h2 className='contact__headline'>Contacto</h2>
                <Field className='form__field' name='name' type='text' placeholder='Nombre'/>
                <ErrorMessage component={'span'} className='error-msg' name='name'/>
                <br />
                <Field className='form__field' name='email' type='email' placeholder='Correo'/>
                <ErrorMessage component={'span'} className='error-msg' name='email'/>
                <br />
                <Field className='form__field form__field--textarea' name='message' type='text' component='textarea' placeholder='Mensaje'/>
                <ErrorMessage component={'span'} className='error-msg' name='message'/>
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