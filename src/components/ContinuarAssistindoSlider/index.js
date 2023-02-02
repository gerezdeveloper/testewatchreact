import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import './ContinuarAssistindoSlider.css'
import ContinuarAssistindo from '../ContinuarAssistindo';

const ContinuarAssistindoSlider = (props) => {
    return (
        <><div className='titlecarrossel'>
            <h1>{props.carousel}</h1>
        </div>
        <div className='slidercarrossel'>
            <Carousel variant='black' indicators={false} interval={100000}>
                <Carousel.Item>
                    <ContinuarAssistindo
                    conteudo={props.capaConteudo1}
                    nomeCard={props.nomeConteudo1}
                    generoCard={props.generoConteudo1} />

                    <ContinuarAssistindo
                    conteudo={props.capaConteudo1}
                    nomeCard={props.nomeConteudo1}
                    generoCard={props.generoConteudo1} />

                    <ContinuarAssistindo
                    conteudo={props.capaConteudo1}
                    nomeCard={props.nomeConteudo1}
                    generoCard={props.generoConteudo1} />

                </Carousel.Item>
                <Carousel.Item>
                    <ContinuarAssistindo
                    conteudo={props.capaConteudo2}
                    nomeCard={props.nomeConteudo2}
                    generoCard={props.generoConteudo2} />

                    <ContinuarAssistindo
                    conteudo={props.capaConteudo2}
                    nomeCard={props.nomeConteudo2}
                    generoCard={props.generoConteudo2} />

                    <ContinuarAssistindo
                    conteudo={props.capaConteudo2}
                    nomeCard={props.nomeConteudo2}
                    generoCard={props.generoConteudo2} />
                </Carousel.Item>

            </Carousel>
        </div></>
    );
}

export default ContinuarAssistindoSlider;




