import { useState } from 'react'
import './RegisterForm.css'
import authService from '../../services/auth.service'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {

    const [isBool, setIsBool] = useState(false)
    const phoneEmail = isBool ? 'Use phone instead' : 'Use email instead'
    const navigate = useNavigate()

    const currentYear = new Date().getFullYear()
    const yearArr = []
    for (let i = currentYear; i >= (currentYear - 110); i--) {
        yearArr.push(i)
    }
    const dayArr = []
    for (let i = 1; i <= 31; i++) {
        dayArr.push(i)
    }

    const [registerForm, setRegisterForm] = useState({
        name: '',
        number: undefined,
        email: '',
        password: '',
        month: 'default',
        day: 'default',
        year: 'default'
    })

    const { name, number, email, password, month, day, year } = registerForm

    const handleInputChange = e => {
        const { name, value } = e.target

        setRegisterForm({
            ...registerForm,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .register(registerForm)
            .then(() => navigate('/auth'))
            .catch(err => console.log(err))
        // console.log({ ...registerForm, birthday: `${day}/${month}/${year}` });
    }

    return (
        <main className='registerFormMain'>
            <div className='registerForm'>
                <h1>Create your account</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        maxLength='50'
                        name='name'
                        value={name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        minLength='2'
                        name='password'
                        value={password}
                        onChange={handleInputChange}
                        required
                    />
                    {
                        !isBool
                            ?
                            <>
                                <input
                                    type="number"
                                    name='number'
                                    placeholder="Phone"
                                    value={number}
                                    onChange={handleInputChange}
                                    required
                                />
                                <a onClick={() => setIsBool(true)}>{phoneEmail}</a>
                            </>
                            :
                            <>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <a onClick={() => setIsBool(false)}>{phoneEmail}</a>
                            </>
                    }
                    <p>Date of birth</p>
                    <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                    <div className='registerFormBirth'>
                        <div className='registerMonth'>
                            <label htmlFor="registerMonth">Month</label>
                            <select defaultValue='default' name="month" id="registerMonth" value={month} onChange={handleInputChange} required>
                                <option value='default' disabled></option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                        <div className='registerDay'>
                            <label htmlFor="registerDay">Day</label>
                            <select defaultValue='default' name="day" id="registerDay" value={day} onChange={handleInputChange} required>
                                <option value='default' disabled></option>
                                {
                                    dayArr.map((elm, idx) => {
                                        return <option key={idx} value={`${elm}`}>{elm}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className='registerYear'>
                            <label htmlFor="registerYear">Year</label>
                            <select defaultValue='default' name="year" id="registerYear" value={year} onChange={handleInputChange} required>
                                <option value='default' disabled></option>
                                {
                                    yearArr.map((elm, idx) => {
                                        return <option key={idx} value={`${elm}`}>{elm}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <button type='submit'>Sign up</button>
                </form>
            </div>
        </main>
    )
}

export default RegisterForm