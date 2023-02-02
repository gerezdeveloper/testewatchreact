import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import ConteudoPrincipal from '../ConteudoPrincipal';
import Banner1 from '../bannersprincipais/banner1.png';
import Banner2 from '../bannersprincipais/banner2.png';
import Banner3 from '../bannersprincipais/banner3.png';
import Banner4 from '../bannersprincipais/banner4.png';
import Banner5 from '../bannersprincipais/banner5.png';

const ContentSlider = () => {
    return (
      <div style={{display: 'block', width: '100%', overflow: 'hidden', backgroundColor: 'black'}}>
        <Carousel fade variant='orange' controls={false}>
          <Carousel.Item interval={3500} >
            <ConteudoPrincipal 
                imagem={Banner1}
                nomeContPrincipal='Hotel Transilvânia 3 - Férias Monstruosas' 
                descricaoPrincipal='Drácula e sua turma embarcam em um cruzeiro monstruosamente luxuoso. Mas as férias dos sonhos logo se transformam em um pesadelo quando Mavis percebe que Drac está se apaixonando por Ericka.'
                anoPrincipal='2021'
                classificacao='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/1024px-DJCTQ_-_L.svg.png' />
            </Carousel.Item>

          <Carousel.Item interval={3500}>
            <ConteudoPrincipal 
                imagem={Banner2}
                nomeContPrincipal='Homem-Aranha: Sem Volta para Casa' 
                descricaoPrincipal='Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando um feitiço para reverter o evento não sai como o esperado, o Homem-Aranha e seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso.'
                anoPrincipal='2021'
                classificacao='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/1024px-DJCTQ_-_L.svg.png' />
            </Carousel.Item>

            <Carousel.Item interval={3500}>
            <ConteudoPrincipal 
                imagem={Banner3}
                nomeContPrincipal='Chainsaw Man' 
                descricaoPrincipal='Chainsaw Man se passa em um mundo onde demônios surgem a partir dos medos humanos. Em geral, essas criaturas são perigosas e malignas, se tornando cada vez mais poderosas de acordo com o medo que conseguem causar nos humanos.'
                anoPrincipal='2022'
                classificacao='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/1024px-DJCTQ_-_L.svg.png' />
            </Carousel.Item>

            <Carousel.Item interval={3500}>
            <ConteudoPrincipal 
                imagem={Banner4}
                nomeContPrincipal='Blue Lock' 
                descricaoPrincipal='Após recentes fracassos no futebol, o Japão cria uma prisão chamada Blue Lock onde 300 jovens passam por um duro treinamento, e um deles se tornará o maior atacante do mundo.'
                anoPrincipal='2022'
                classificacao='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/1024px-DJCTQ_-_L.svg.png' />
            </Carousel.Item>

            <Carousel.Item interval={3500}>
            <ConteudoPrincipal 
                imagem={Banner5}
                nomeContPrincipal='Avatar 2' 
                descricaoPrincipal='Após formar uma família, Jake Sully e Neytiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos.'
                anoPrincipal='2023'
                classificacao='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/1024px-DJCTQ_-_L.svg.png' />
            </Carousel.Item>
        </Carousel>
      </div>
    );
  }

export default ContentSlider;