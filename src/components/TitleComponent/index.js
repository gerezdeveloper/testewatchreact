import './TitleComponent.css';

const TitleComponent = () => {

    return (
        <div className='title-components'>          
            <div className='title-capa'>
                <img src='https://fivenet.com.br/wp-content/uploads/2022/10/Watch-Brasil.png' alt='imagem conteudo' />
            </div>
            <div className='title-informacoes'>
                <div className='titulo'>
                <h1>Título do Conteúdo</h1>
                <img src='https://static.vecteezy.com/system/resources/previews/009/663/133/original/5-star-rating-review-star-transparent-free-png.png' alt='fivestar' />
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <button>Assistir agora</button>
            </div>
        </div>
    );
}

export default TitleComponent;