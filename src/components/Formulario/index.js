import CampoTexto from '../CampoTexto';
import './Formulario.css';
import SpatialNavigation, { Focusable } from 'react-js-spatial-navigation';

const Formulario = () => {

    return (
        <div className='formulario'>
            <h1>Entrar</h1>
            
            <form>
            <SpatialNavigation>
            <Focusable>
                <CampoTexto
                mandatory={true}
                placeholder="Digite seu e-mail"
                type="email" 
                />
            </Focusable>

            <Focusable>
                <CampoTexto
                mandatory={true}
                placeholder="Digite sua senha"
                type="password" 
                />
            </Focusable>
            </SpatialNavigation>
            </form>
        </div>
    );
}

export default Formulario;