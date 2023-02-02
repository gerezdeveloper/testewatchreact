import { useNavigate } from 'react-router-dom';
import './PerfisUsuario.css'

const PerfisUsuario = (props) => {

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/home');
    }

    return (
        <>
        <div className='usuario'>
            <div className='nome'>
                <h1>{props.nome}</h1>
            </div>
            <div className='perfil'>
                <img src={props.imagem} alt='perfil'/>
            </div>
            <div className='botoes'>
                <button onClick={goToHome}>Entrar</button>
            </div>
        </div>
        </>
    );
}

export default PerfisUsuario