import './ConteudoPrincipal.css';
import lupaHeader from './assets/lupaheader.png';
import favoritosHeader from './assets/favoritosheader.png';
import homeHeader from './assets/homeheader.png';
import lançamentosHeader from './assets/lançamentosheader.png';
import SpatialNavigation, { Focusable } from 'react-js-spatial-navigation'
import { useNavigate } from 'react-router-dom';


const ConteudoPrincipal = (props) => {

    const navigate = useNavigate();
    const goToTitle = () => {
        navigate('/title');
    }

    const goToInicio = () => {
        navigate('/home')
    }

    const goToSearch = () => {
        navigate('/buscas')
    }

    return (
    <SpatialNavigation>
        <div className='conteudo'>
            <img src='https://watchbr-resources-v3.s3.sa-east-1.amazonaws.com/assets/logos/logo-watch.svg' className='logoWatch' alt='logo-watch'/>
            <img src={props.imagem} alt='imagem do conteúdo' className='conteudo-principal' />
            <div className='optionsheader'>
                <ul className='options-list'>
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
                </ul>
            </div>
            <div className='itensPrincipal'>
                <h1>{props.nomeContPrincipal}</h1>

                <div className='listaDescricao'>
                <h4>{props.anoPrincipal}</h4>
                <img src={props.classificacao} alt='classificação etária' className='classificacaoPrincipal' />
                </div>
                <h3>{props.descricaoPrincipal}</h3>
                <button onClick={goToTitle}><Focusable>▷ Assistir</Focusable></button>
            </div>
        </div>
    </SpatialNavigation>

    );
}

export default ConteudoPrincipal;