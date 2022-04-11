import RegisterForm from '../../components/RegisterForm/RegisterForm'
import './RegisterPage.css'

const RegisterPage = () => {
    return (
        <div className='container'>
            <div className="signupTop">
                <i className="fa-solid fa-xmark"></i>
                <i className="fa-brands fa-twitter"></i>
                <div></div>
            </div>
            <RegisterForm />
        </div>
    )
}

export default RegisterPage