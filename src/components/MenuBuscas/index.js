import { useNavigate } from 'react-router-dom';
import MenuBuscasSemelhantes from '../MenuBuscasSemelhantes';
import './MenuBuscas.css';

const MenuBuscas = () => {

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/home');
    }

    return (
        <div className='background-buscas'>
            <div className='container-buscas'>
                <button onClick={goToHome} className='voltar'>🠔</button>
                <input placeholder='Digite o nome do conteúdo:'></input>
            </div>
            <div className='conteudosSemelhantes'><h1>Conteúdos semelhantes ao que você pesquisou:</h1></div>
            <div className='semelhantes'>
            <MenuBuscasSemelhantes/>
            <MenuBuscasSemelhantes/>
            <MenuBuscasSemelhantes />
            <MenuBuscasSemelhantes />
            <MenuBuscasSemelhantes />
            <MenuBuscasSemelhantes />
            <MenuBuscasSemelhantes />
            <MenuBuscasSemelhantes />
            </div>
        </div>
    );
}

export default MenuBuscas;