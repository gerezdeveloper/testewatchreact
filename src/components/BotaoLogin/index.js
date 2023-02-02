import './BotaoLogin.css';

const BotaoLogin = (props) => {
    
    return (
        <button className='botao'>
            {props.children}
        </button>
    );
}

export default BotaoLogin;