import './ConteudoPrincipal.css';
import lupaHeader from './assets/lupaheader.png';
import favoritosHeader from './assets/favoritosheader.png';
import homeHeader from './assets/homeheader.png';
import lançamentosHeader from './assets/lançamentosheader.png';
import SpatialNavigation, { Focusable, FocusableSection } from 'react-js-spatial-navigation'
import { useNavigate } from 'react-router-dom';

function focus1() {
    console.log('focused 1')
  }
  
  function unfocus2() {
    console.log('unfocus 2')
  }


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
                <Focusable className="active">
                    <li><img src={homeHeader} className='home' alt='home' onClick={goToInicio}/></li>
                </Focusable>
                <Focusable className="active">
                    <li><img src={lupaHeader} className='lupa' onClick={goToSearch} alt='lupa'/></li>
                </Focusable>
                <Focusable className="active">
                    <li><img src={favoritosHeader} className='favorite' alt='favorite'/></li>
                </Focusable>
                <Focusable className="active">
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
                <Focusable className="active">
                <button onClick={goToTitle}>▷ Assistir</button>
                </Focusable>
            </div>
        </div>
    </SpatialNavigation>

    );
}

export default ConteudoPrincipal;