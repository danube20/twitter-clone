import './RegisterForm.css'

const RegisterForm = () => {

    const nameInput = e => { // Conseguir añadir estilo cuando se haga focus
        e.target.style.padding = '1rem 10px'
        e.target.style.fontSize = '16px'
        e.target.style.borderRadius = '5px'
        e.target.style.border = '2px solid'
        e.target.style.borderColor = 'var(--main - color)'
    }
    // const nameFocusPlace = e => {
    //     position: 'absolute',
    //         marginTop: '-10px',
    //             fontSize: '14px',
    //                 color: 'var(--main - color)'
    // }

    return (
        <main className='registerFormMain'>
            <div className='registerForm'>
                <h1>Create your account</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Name"
                        maxLength='50'
                        name='name'
                        onFocus={(e) => nameInput(e)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                    />
                    <a>Use phone instead</a>
                    <p>Date of birth</p>
                    <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                    <input
                        type="date"
                        placeholder="Date of birth"
                    />
                </form>
            </div>
            <button>Next</button>
        </main>
    )
}

export default RegisterForm