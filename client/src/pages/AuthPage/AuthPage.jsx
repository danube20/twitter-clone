import { Link } from 'react-router-dom'
import './AuthPage.css'

const AuthPage = () => {

    const notRealTwitter = () => {
        alert('This is not twitter lol')
    }

    return (
        <main className='authPage'>
            <div className='container'>
                <header>
                    <i className="fa-brands fa-twitter"></i>
                    <h1>Happening now</h1>
                </header>
                <section className='AuthOptions'>
                    <h3>Join Twitter today.</h3>
                    <div className='signup'>
                        <button onClick={notRealTwitter}><i className="fa-brands fa-google"></i> Sign up with Google</button>
                        <button onClick={notRealTwitter}><i className="fa-brands fa-apple"></i> Sign up with Apple</button>
                        <div className='authSeparator'>
                            <div className='separatorLine'></div>
                            <p>or</p>
                            <div className='separatorLine'></div>
                        </div>
                        <button><Link to='/signup'>Sign up with phone or email</Link></button>
                        <div className='authPolicyTerms'>By signing up, you agree to the <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>, including <a href="">Cookie Use</a></div>
                    </div>
                    <div className='signin'>
                        <h4>Already have an account?</h4>
                        <button>Sign in</button>
                    </div>
                </section>
            </div>
            <section className='authPageImg'>
                <img src="https://www.affde.com/uploads/article/35720/h5kMEijjHCagtAEa.png" alt="twitter logo" />
            </section>
        </main>
    )
}

export default AuthPage