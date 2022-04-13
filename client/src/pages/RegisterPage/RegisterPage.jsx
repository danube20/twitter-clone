import { useNavigate } from 'react-router-dom'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import './RegisterPage.css'

const RegisterPage = () => {

    const mq = window.matchMedia('(max-width: 576px)')
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className="signupTop">
                <i className="fa-solid fa-xmark" onClick={() => mq.matches && navigate('/auth')}></i>
                <i className="fa-brands fa-twitter"></i>
                <div></div>
            </div>
            <RegisterForm />
        </div>
    )
}

export default RegisterPage