import { useNavigate } from 'react-router-dom';
import './ContinuarAssistindo.css';

const ContinuarAssistindo = (props) => {

    const navigate = useNavigate();
    const goToTitle = () => {
        navigate('/title');
    }

    return (
        <div className='box-carrossel'>
            <button onClick={goToTitle} className='card-ca'>
                <img src={props.conteudo} alt='capa conteúdo' />
                <div className='sinopse-ca'>
                    <h1>{props.nomeCard}</h1>
                    <p>{props.generoCard}</p>
                    <button className='continuarassist'>Continuar assistindo</button>
                    <button className='favoritar'>⋆</button>
                </div>
            </button>
        </div>
    );
}

export default ContinuarAssistindo;