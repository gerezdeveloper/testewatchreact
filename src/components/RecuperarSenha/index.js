import './RecuperarSenha.css';
import SpatialNavigation, { Focusable } from 'react-js-spatial-navigation';

const RecuperarSenha = () => {
    return (
        <div className='recuperar-senha'>
            <SpatialNavigation>
            <p>Para recuperar sua senha, utilize o navegador web e acesse:</p>
            <a href='play.watch.tv.br/login/esqueci-minha-senha'><Focusable>play.watch.tv.br/login/esqueci-minha-senha</Focusable></a>
            </SpatialNavigation>
        </div>
    );
}

export default RecuperarSenha