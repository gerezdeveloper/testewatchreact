import BannerXPE from '../BannerXPE';
import CarrosselVodsSlider from '../CarrosselVodsSlider'
import LinearesSlider from '../LinearesSlider';
import './LogadaContainer.css';
import SpatialNavigation, { Focusable } from 'react-js-spatial-navigation'
import ContinuarAssistindoSlider from '../ContinuarAssistindoSlider';

const LogadaContainer = () => {
    return (
        <>
        <div className='container-logada'>
            <SpatialNavigation>

                <Focusable>
                    <LinearesSlider />
                </Focusable>

                <Focusable>
                    <CarrosselVodsSlider
                        carousel='Lançamentos'
                        capaConteudo1='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_99rwlgp4'
                        nomeConteudo1='TopGun: Maverick'
                        generoConteudo1='Ação - Drama'

                        capaConteudo2='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_mwhwzxf3'
                        nomeConteudo2='Pets: A Vida Secreta dos Bichos'
                        generoConteudo2='Família'

                        capaConteudo3='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_bifs5naq'
                        nomeConteudo3='Teen Wolf: The Movie'
                        generoConteudo3='Suspense'

                        capaConteudo4='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_96fycdjx'
                        nomeConteudo4='King: Meu Melhor Amigo'
                        generoConteudo4='Aventura'

                        capaConteudo5='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_d2v11w9t'
                        nomeConteudo5='Padrinhos Mágicos: O Filme'
                        generoConteudo5='Aventura'

                        capaConteudo6='https://wbra.tmsimg.com/assets/p8238130_v_v8_af.jpg?w=196'
                        nomeConteudo6='Esposa de Mentirinha'
                        generoConteudo6='Romance'

                        capaConteudo7='https://wbra.tmsimg.com/assets/p9872696_v_v8_ad.jpg?w=196'
                        nomeConteudo7='Tá Chovendo Hambúrguer 2'
                        generoConteudo7='Suspense' />
                </Focusable>

                <Focusable>
                <ContinuarAssistindoSlider
                        carousel='Continuar Assistindo'
                        capaConteudo1='https://wbra.tmsimg.com/assets/p20157577_b_h2_aj.jpg?w=416'
                        nomeConteudo1='O Show do Patrick Estrela'
                        generoConteudo1='Infantil'
                        
                        capaConteudo2='https://wbra.tmsimg.com/assets/p186130_b_h2_bm.jpg?w=416'
                        nomeConteudo2='Os Padrinhos Mágicos'
                        generoConteudo2='Aventura'/>
                </Focusable>

                <Focusable>
                    <CarrosselVodsSlider
                        carousel='Mais Assistidos'
                        capaConteudo1='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_99rwlgp4'
                        nomeConteudo1='TopGun: Maverick'
                        generoConteudo1='Ação - Drama'

                        capaConteudo2='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_mwhwzxf3'
                        nomeConteudo2='Pets: A Vida Secreta dos Bichos'
                        generoConteudo2='Família'

                        capaConteudo3='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_bifs5naq'
                        nomeConteudo3='Teen Wolf: The Movie'
                        generoConteudo3='Suspense'

                        capaConteudo4='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_96fycdjx'
                        nomeConteudo4='King: Meu Melhor Amigo'
                        generoConteudo4='Aventura'

                        capaConteudo5='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_d2v11w9t'
                        nomeConteudo5='Padrinhos Mágicos: O Filme'
                        generoConteudo5='Aventura'

                        capaConteudo6='https://wbra.tmsimg.com/assets/p8238130_v_v8_af.jpg?w=196'
                        nomeConteudo6='Esposa de Mentirinha'
                        generoConteudo6='Romance'

                        capaConteudo7='https://wbra.tmsimg.com/assets/p9872696_v_v8_ad.jpg?w=196'
                        nomeConteudo7='Tá Chovendo Hambúrguer 2'
                        generoConteudo7='Suspense' />
                </Focusable>

            </SpatialNavigation>
        </div>
        <div className='secondcontainer-logada'>
            <SpatialNavigation>
            <Focusable>
                <BannerXPE />
            </Focusable>
            <Focusable>
                    <CarrosselVodsSlider
                        carousel='Filmes'
                        capaConteudo1='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_99rwlgp4'
                        nomeConteudo1='TopGun: Maverick'
                        generoConteudo1='Ação - Drama'

                        capaConteudo2='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_mwhwzxf3'
                        nomeConteudo2='Pets: A Vida Secreta dos Bichos'
                        generoConteudo2='Família'

                        capaConteudo3='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_bifs5naq'
                        nomeConteudo3='Teen Wolf: The Movie'
                        generoConteudo3='Suspense'

                        capaConteudo4='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_96fycdjx'
                        nomeConteudo4='King: Meu Melhor Amigo'
                        generoConteudo4='Aventura'

                        capaConteudo5='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_d2v11w9t'
                        nomeConteudo5='Padrinhos Mágicos: O Filme'
                        generoConteudo5='Aventura'

                        capaConteudo6='https://wbra.tmsimg.com/assets/p8238130_v_v8_af.jpg?w=196'
                        nomeConteudo6='Esposa de Mentirinha'
                        generoConteudo6='Romance'

                        capaConteudo7='https://wbra.tmsimg.com/assets/p9872696_v_v8_ad.jpg?w=196'
                        nomeConteudo7='Tá Chovendo Hambúrguer 2'
                        generoConteudo7='Suspense' />
                </Focusable>

                <Focusable>
                    <CarrosselVodsSlider
                        carousel='Séries'
                        capaConteudo1='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_99rwlgp4'
                        nomeConteudo1='TopGun: Maverick'
                        generoConteudo1='Ação - Drama'

                        capaConteudo2='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_mwhwzxf3'
                        nomeConteudo2='Pets: A Vida Secreta dos Bichos'
                        generoConteudo2='Família'

                        capaConteudo3='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_bifs5naq'
                        nomeConteudo3='Teen Wolf: The Movie'
                        generoConteudo3='Suspense'

                        capaConteudo4='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_96fycdjx'
                        nomeConteudo4='King: Meu Melhor Amigo'
                        generoConteudo4='Aventura'

                        capaConteudo5='https://cdnsecakmi.kaltura.com/api_v3/index.php/service/thumbAsset/action/serve/thumbAssetId/1_d2v11w9t'
                        nomeConteudo5='Padrinhos Mágicos: O Filme'
                        generoConteudo5='Aventura'

                        capaConteudo6='https://wbra.tmsimg.com/assets/p8238130_v_v8_af.jpg?w=196'
                        nomeConteudo6='Esposa de Mentirinha'
                        generoConteudo6='Romance'

                        capaConteudo7='https://wbra.tmsimg.com/assets/p9872696_v_v8_ad.jpg?w=196'
                        nomeConteudo7='Tá Chovendo Hambúrguer 2'
                        generoConteudo7='Suspense' />
                </Focusable>
            </SpatialNavigation>
        </div>
        </>
    );
}

export default LogadaContainer;