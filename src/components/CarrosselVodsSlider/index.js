import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import CarrosselComponent from '../CarrosselComponent';
import './CarrosselVodsSlider.css'
import SpatialNavigation, { Focusable } from 'react-js-spatial-navigation'

const CarrosselVodsSlider = (props) => {
    return (
        <>
        <SpatialNavigation><div className='titlecarrossel'>
            <h1>{props.carousel}</h1>
            <button><Focusable>Ver mais</Focusable></button>    
        </div></SpatialNavigation>
        <div className='slidercarrossel'>
            <Carousel variant='black' indicators={false} interval={100000}>
                <Carousel.Item>
                    <CarrosselComponent
                    conteudo={props.capaConteudo1}
                    nomeCard={props.nomeConteudo1}
                    generoCard={props.generoConteudo1} />

                    <CarrosselComponent
                    conteudo={props.capaConteudo2}
                    nomeCard={props.nomeConteudo2}
                    generoCard={props.generoConteudo2} />

                    <CarrosselComponent
                    conteudo={props.capaConteudo3}
                    nomeCard={props.nomeConteudo3}
                    generoCard={props.generoConteudo3} />

                    <CarrosselComponent
                    conteudo={props.capaConteudo4}
                    nomeCard={props.nomeConteudo4}
                    generoCard={props.generoConteudo4} />

                    <CarrosselComponent
                    conteudo={props.capaConteudo5}
                    nomeCard={props.nomeConteudo5}
                    generoCard={props.generoConteudo5} />

                    <CarrosselComponent
                    conteudo={props.capaConteudo6}
                    nomeCard={props.nomeConteudo6}
                    generoCard={props.generoConteudo6} />

                    <CarrosselComponent
                    conteudo={props.capaConteudo7}
                    nomeCard={props.nomeConteudo7}
                    generoCard={props.generoConteudo7} />
                </Carousel.Item>

                <Carousel.Item>
                <CarrosselComponent
                    conteudo='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_99rwlgp4'
                    nomeCard='TopGun: Maverick'
                    generoCard='Ação - Drama' />

                    <CarrosselComponent
                    conteudo='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_mwhwzxf3'
                    nomeCard='Pets: A Vida Secreta dos Bichos'
                    generoCard='Família' />

                    <CarrosselComponent
                    conteudo='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_bifs5naq'
                    nomeCard='Teen Wolf: The Movie'
                    generoCard='Suspense' />

                    <CarrosselComponent
                    conteudo='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_96fycdjx'
                    nomeCard='King: Meu Melhor Amigo'
                    generoCard='Aventura' />

                    <CarrosselComponent
                    conteudo='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_d2v11w9t'
                    nomeCard='Padrinhos Mágicos: O Filme'
                    generoCard='Suspense' />

                    <CarrosselComponent
                    conteudo='https://wbra.tmsimg.com/assets/p8238130_v_v8_af.jpg?w=196'
                    nomeCard='Esposa de Mentirinha'
                    generoCard='Romance' />

                    <CarrosselComponent
                    conteudo='https://wbra.tmsimg.com/assets/p9872696_v_v8_ad.jpg?w=196'
                    nomeCard='Tá Chovendo Hambúrguer 2'
                    generoCard='Suspense' />
                </Carousel.Item>

            </Carousel>
        </div></>
    );
}

export default CarrosselVodsSlider;




