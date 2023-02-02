import CampoTexto from '../CampoTexto';
import './Formulario.css';

const Formulario = () => {

    return (
        <div className='formulario'>
            <h1>Entrar</h1>
            <form>
                <CampoTexto
                mandatory={true}
                placeholder="Digite seu e-mail"
                type="email" 
                />

                <CampoTexto
                mandatory={true}
                placeholder="Digite sua senha"
                type="password" 
                />
            </form>
        </div>
    );
}

export default Formulario;