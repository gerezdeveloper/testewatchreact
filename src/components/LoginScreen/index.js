import React from 'react';
import './LoginScreen.css'
import Wave from 'react-wavify';
import { useNavigate } from 'react-router-dom';
import Formulario from '../Formulario';
import RecuperarSenha from '../RecuperarSenha';
import SpatialNavigation, { Focusable } from 'react-js-spatial-navigation';


function LoginScreen() {
  const navigate = useNavigate();
    const goToProfile = () => {
        navigate('/profile');
    }
    return(
      <div className="Watch">
        <div className='left'>
          <img src="https://watchbr-resources-v3.s3.sa-east-1.amazonaws.com/assets/logos/logo-watch.svg" className='logo-watch' alt="logo" />
          <img src='https://developer.android.com/static/training/tv/images/atv-keyboard-password.png' className='keyboard' alt='keyboard' />
          <Wave className='wave' fill='orangered'
            paused = {false}
            options = {{
                height: 5,
                amplitude: 20,
                speed: 0.15,
                points: 3
            }} />
        </div>
      <div className="right">
      <SpatialNavigation>
        <Formulario />
        <button className='botao' onClick={goToProfile}><Focusable>Entrar</Focusable></button>
        <RecuperarSenha />
      </SpatialNavigation>
      </div>
    </div>
    );
};

export default LoginScreen;