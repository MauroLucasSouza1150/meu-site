import styles from './Home.module.css'
import myIcon from './images/my-icon.png'
import curriculo from './docs/meu-curriculo.pdf'

import { FaDownload, FaWhatsapp } from "react-icons/fa6";

const Home = () => {
  return (

    <section className={styles.home}>
      <div className={styles.apresentacao}>
        <p>Olá, Me Chamo</p>
        <p><span>Mauro Lucas</span>, e Sou</p>
        <p>Um Desenvolvedor Web</p>
        <div className={styles.btn__links}>
          <a href={curriculo} className={styles.btn__curriculo} target='_blank'><FaDownload /> Baixe meu Currículo</a>
          <a href='https://wa.me/5588981258154?text=Prazer%2C+Meu+nome+%C3%A9+Lucas%2C+posso+te+ajudar+em+alguma+coisa+%3F' className={styles.btn__email} target='_blank'><FaWhatsapp /> Mande uma mensagem</a>
        </div>
      </div>
      <figure>
        <img  src={myIcon} alt="Imagem da minha Logo" className={styles.icon__home}/>
      </figure>
    </section>

  )
}

export default Home