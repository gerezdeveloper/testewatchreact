import { useNavigate } from 'react-router-dom';
import MenuBuscasSemelhantes from '../MenuBuscasSemelhantes';
import VirtualKeyboard from '../VirtualKeyboard';
import './MenuBuscas.css';
import homeHeader from './assets/homeheader.png';
import lupaHeader from './assets/lupaheader.png';
import favoritosHeader from './assets/favoritosheader.png';
import lançamentosHeader from './assets/lançamentosheader.png';
import SpatialNavigation, { Focusable } from 'react-js-spatial-navigation'
import GenerosBusca from '../GenerosBusca';

const MenuBuscas = () => {

    const navigate = useNavigate();
    const goToInicio = () => {
        navigate('/home');
    }

    const goToSearch = () => {
        navigate('/buscas')
    }

    return (
        <div className='container-full-buscas'>
            <div className='header-lateral'>
            <ul className='optionsList'>
            <SpatialNavigation>
                <Focusable>
                    <li><img src={homeHeader} className='home' alt='home' onClick={goToInicio}/></li>
                </Focusable>
                <Focusable>
                    <li><img src={lupaHeader} className='lupa' onClick={goToSearch} alt='lupa'/></li>
                </Focusable>
                <Focusable>
                    <li><img src={favoritosHeader} className='favorite' alt='favorite'/></li>
                </Focusable>
                <Focusable>
                    <li><img src={lançamentosHeader} className='lançamentos' alt='lançamentos'/></li>
                </Focusable>
            </SpatialNavigation>
            </ul>
            </div>
            <div className='background-buscas'>
                <div className='container-buscas'>
                    <h1>O que você busca?</h1>
                    <VirtualKeyboard />
                    <input placeholder='Digite o nome do conteúdo:'></input>
                    <GenerosBusca />
                </div>
                <div className='conteudosSemelhantes'><h1>Sugestões para você:</h1></div>
                <div className='semelhantes'>
                <MenuBuscasSemelhantes/>
                <MenuBuscasSemelhantes/>
                <MenuBuscasSemelhantes/>
                <MenuBuscasSemelhantes/>
                </div>
            </div>
        </div>
    );
}

export default MenuBuscas;