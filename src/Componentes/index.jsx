const App() {
    return (
       <div><LoginDados/></div>
    )
}

function LoginDados() {
    return (
        <div className='form__campo-digitacao'>
            <label htmlFor="email">E-mail ou Usuario: </label>
            <input type="email"
                placeholder='Digite seu e-mail ou usuário'
                required
                id='email' />
        </div>
    )
}
