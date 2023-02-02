import SpatialNavigation, { Focusable } from 'react-js-spatial-navigation'
import './BannerXPE.css';

const BannerXPE = () => {
    return (
        <SpatialNavigation>
        <div className='XPE'>
            <div className='informacoesXPE'>
                <img src='https://watchbr-resources.s3.amazonaws.com/lists/XPE_color.svg' alt='logo XPE'/>
                <p>A empresa que simplificou a vida financeira de milhares de pessoas, agora vai transformar vidas e carreiras, por meio da educação.</p>
                
                <button><Focusable>Explorar</Focusable></button>
            </div>
            <div className='bannerXPE'>
                <img src='https://www.protestocampinas.com.br/ArquivosCliente/f5ea9826-b50a-4445-a6cd-37427d7e2244.png' alt='banner XPE'/>
            </div>
        </div>
        </SpatialNavigation>
    );
}

export default BannerXPE;