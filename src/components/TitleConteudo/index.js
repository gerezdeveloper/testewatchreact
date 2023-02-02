import TitleComponent from '../TitleComponent';
import './TitleConteudo.css';
import SpatialNavigation, { Focusable } from 'react-js-spatial-navigation'
import homeHeader from './assets/homeheader.png';
import lupaHeader from './assets/lupaheader.png';
import favoritosHeader from './assets/favoritosheader.png';
import lançamentosHeader from './assets/lançamentosheader.png';
import { useNavigate } from 'react-router-dom';

const TitleConteudo = () => {

    const navigate = useNavigate();
    const goToInicio = () => {
        navigate('/home');
    }

    const goToSearch = () => {
        navigate('/buscas')
    }


    return (
        <div className='title'>
            <div className='box-title'>
            <div className='lateral-header'>
                <ul className='list-options'>
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
                <TitleComponent />
            </div>
        </div>
    );
}

export default TitleConteudo;