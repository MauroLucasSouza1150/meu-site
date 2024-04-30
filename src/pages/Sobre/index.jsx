import styles from './Sobre.module.css';
import foto from './images/foto.png'
import html from './images/html-icon.png'
import css from './images/css3.png'
import javascript from './images/js-icon.png'
import react from './images/react-icon.png'
import node from './images/nodejs-icon.png'
import sql from './images/sql-icon.png'

const Sobre = () => {
  return (

    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={foto} alt="Minha Foto" className={styles.foto}/>
        <div className={styles.texto}>
          <h2>Sobre</h2>
          <p>Prazer, Meu nome é <strong>Mauro Lucas.</strong></p>
          <p>E sou um <span>Desenvolvedor Front-End.</span></p>
          <p>Sou Tecnólogo em Análise e Desenvolvimento de Sistemas.</p>
          <p>Amo tecnológia desde minha infância.</p>
          <p>Meu Objetivo, é realizar uma boa experiência de usuário <br />
          Com as aplicações web, tornando-as mais dinâmicas.</p>
        </div>
      </div>
      <div className={styles.techs}>
        <h2>Minhas Techs</h2>
        <div className={styles.icones_techs}>
          <img src={html} alt="icone html" className={`${styles.icone_tech} ${styles.icone_html}`} />
          <img src={css} alt="icone css" className={styles.icone_tech} />
          <img src={javascript} alt="icone javascript" className={styles.icone_tech} />
          <img src={react} alt="icone react" className={styles.icone_tech} />
          <img src={node} alt="icone nodejs" className={styles.icone_tech} />
          <img src={sql} alt="icone sql" className={styles.icone_tech} />
        </div>
      </div>
    </section>
  )
}

export default Sobre