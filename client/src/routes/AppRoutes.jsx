import { Route, Routes } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm/RegisterForm'
import AuthPage from '../pages/AuthPage/AuthPage'
import HomePage from '../pages/HomePage/HomePage'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/signup' element={<RegisterForm />} />

        </Routes>
    )
}

export default AppRoutes