import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import Lineares from '../Lineares';
import './LinearesSlider.css';
import SpatialNavigation, { Focusable, FocusableSection } from 'react-js-spatial-navigation'

const LinearesSlider = () => {
    return (
        <>
        <SpatialNavigation>
        <div className='titlelineares'>
            <h1>Canais Ao Vivo</h1>
            <Focusable>
            <button>Ver mais</button>
            </Focusable>
        </div>
        <div className='sliderlineares'>
            <Carousel variant='black' indicators={false} interval={100000}>
                <Carousel.Item>
                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/AMC_watch_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/Agro_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/Aparecida_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/Bloomberg_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/Band_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/BandNews_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/CNNBrasil_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/ComedyCentral_watch_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/Gulli_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/MTV_watch_White_Web.svg' />

                </Carousel.Item>

                <Carousel.Item>
                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/Curta_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/CancaoNova_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/ChefTV_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/Cultura_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/FuelTV_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/FilmsArt_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/FishTV_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/Gazeta_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/MCMTOP_White_Web.svg' />

                    <Lineares
                        imagem='https://watchbr-resources.s3.amazonaws.com/channels/Nickelodeon_watch_White_Web.svg' />

                </Carousel.Item>

            </Carousel>
        </div>
        </SpatialNavigation>
        </>
    );
}

export default LinearesSlider;




