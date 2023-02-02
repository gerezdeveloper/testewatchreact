import './GenerosBusca.css';

const GenerosBusca = () => {
    return (
        <div className='generosBusca'>
            <div className='generos'>
                <p>Todos</p>
                <p>Ação</p>
                <p>Aventura</p>
                <p>Animação</p>
                <p>Comédia</p>
                <p>Documentários</p>
            </div>
            <div className='generos'>
                <p>Drama</p>
                <p>Fatos históricos</p>
                <p>Família</p>
                <p>Musical</p>
                <p>Ficção Científica</p>
                <p>Infantil</p>
            </div>
            <div className='generos'>
                <p>Séries</p>
                <p>Reality Shows</p>
                <p>Romance</p>
                <p>Terror</p>
                <p>Suspense</p>
                <p>Tendências</p>
            </div>
        </div>
    );
}

export default GenerosBusca;