import { useNavigate } from 'react-router-dom';
import './PerfisUsuario.css'
import SpatialNavigation, { Focusable } from 'react-js-spatial-navigation';

const PerfisUsuario = (props) => {

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/home');
    }

    return (
        <>
        <SpatialNavigation>
        <div className='usuario'>
            <div className='nome'>
                <h1>{props.nome}</h1>
            </div>
            <div className='perfil'>
                <img src={props.imagem} alt='perfil'/>
            </div>
            <div className='botoes'>
                <button onClick={goToHome}><Focusable>Entrar</Focusable></button>
            </div>
        </div>
        </SpatialNavigation>
        </>
    );
}

export default PerfisUsuario