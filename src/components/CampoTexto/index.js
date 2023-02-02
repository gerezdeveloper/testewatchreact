import './CampoTexto.css';

const CampoTexto = (props) => {
    return (
        <div className='space-text'>
            <input type={props.type} required={props.mandatory} placeholder={props.placeholder} />
        </div>
    );
}

export default CampoTexto;