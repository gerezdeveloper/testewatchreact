import LogadaContainer from '../LogadaContainer';
import ContentSlider from '../SliderPrincipal/ContentSlider';
import './logada.css';

const Logada = () => {
    return (
        <div className='homeLogada'>
            <ContentSlider />
            <LogadaContainer />
        </div>
    );
}

export default Logada;