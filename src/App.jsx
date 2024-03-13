import './App.css';
import Logo from "./img/imagem-login.png";
import './estilos.css';
import PropTypes from 'prop-types';
import { useState } from 'react';


const App = () => {
    return (
        <div>
            <PaginaDeLogin />
        </div>
    )
};

function Botao({children}){
    return(
        <div>
            <button className='form-bottao' 
            type='Submit' >{children}</button>
        </div>
    )
}

function Titulo({children}){
    return(
        <h1 className='form-titulo'>{children}</h1>
    )
}

function SubTitulo({children}){
    return(
        <h2 className='form-texto'>{children}</h2>
    )
}

function CheckBox(){
    return(
        <>
        <div className='form__campo-checkbox'>
            <input type="checkbox" id='lembrar'  />
            <label htmlFor="lembrar"/>
        </div>
        <p className='form__opcoes-texto'>Lembrar-me </p>
        </>
    )
}

function PaginaDeLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    //salvamos os dados do campo de digitação
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('email ' + email);
        console.log('senha ' + senha)
    }
    

    return (
        <div className='container-login'>
            <img src={Logo} alt="Mulher negra" />
            <form onSubmit={handleSubmit}>
                <Titulo>LOGIN</Titulo>
                <SubTitulo>Boas Vindas!!! faça seu login</SubTitulo>
                <CampoDeDigitacao
                    label='E-mail ou usuario'
                    tipo='e-mail'
                    placeholder='Digite seu email ou usuario'
                    value={email}
                    setValue={setEmail}
                />
                <CampoDeDigitacao
                    label='Senha'
                    tipo='password'
                    placeholder='Digite a sua senha'
                    setValue={setSenha}
                    value={senha}
                />

                <CheckBox/>
                <Botao>Login</Botao>
            </form>

        </div>
    )
}

function CampoDeDigitacao({label, tipo, placeholder, value, setValue}) {
    return (
            <div className='form-campo-digitacao'>
                <label htmlFor={tipo}>{label} </label>
                <input type= {tipo}
                    placeholder={placeholder}
                    required
                    id={tipo}
                    value={value}
                    onChange={(evento)=>setValue(evento.target.value)}
                    
                />
            </div>

    )
}

        CampoDeDigitacao.propTypes = {
            label: PropTypes.string,
            tipo: PropTypes.string,
            placeholder: PropTypes.string, 
            value:PropTypes.string,
            setValue:PropTypes.func

        };

export default App;
