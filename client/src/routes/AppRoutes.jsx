import { Route, Routes } from 'react-router-dom'
import AuthPage from '../pages/AuthPage/AuthPage'
import HomePage from '../pages/HomePage/HomePage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/signup' element={<RegisterPage />} />

        </Routes>
    )
}

export default AppRoutes