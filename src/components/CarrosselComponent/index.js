import { useNavigate } from 'react-router-dom';
import './CarrosselComponent.css';

const CarrosselComponent = (props) => {

    const navigate = useNavigate();
    const goToTitle = () => {
        navigate('/title');
    }

    return (
        <div className='box-carrossel'>
            <button onClick={goToTitle} className='card'>
                <img src={props.conteudo} alt='capa conteúdo' />
                <div className='sinopse'>
                    <h1>{props.nomeCard}</h1>
                    <p>{props.generoCard}</p>
                    <button className='assistir'>Assistir</button>
                    <button className='favoritar'>⋆</button>
                </div>
            </button>
        </div>
    );
}

export default CarrosselComponent;