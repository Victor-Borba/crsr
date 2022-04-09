import './Home.css'
import imagem from '../../imgs/imagem.png'
import LinkButton from '../Layout/LinkButton'

function Home() {
 return (
     <section className='home'>
        <h1> Bem-vindo</h1>
        <LinkButton to='/cursos' text= "Listar cursos" />
        <LinkButton to='/newproject' text= "Cadastrar cursos" />
        <img src={imagem} alt="Cursos" />
     </section>
 )
}

export default Home