import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import styles from "./Contatos.module.css"

const Contatos = () => {
  return (

    <section className={styles.contatos}>
      <h2>Contatos</h2>
      <h3>Se interessou pelo meu serviço, ou quer negociar, fale comigo! </h3>
      <p>Meus Contatos:</p>

      <div className={styles.icones}>
        <a href="mailto:maurolucas2014@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdEmail className={`${styles.icone} ${styles.email}`} />
        </a>
        <a href="https://www.instagram.com/maurolucas_souza/?hl=pt-br" target="_blank" rel="noopener noreferrer">
          <FaInstagram className={`${styles.icone} ${styles.instagram}`} />
        </a>
        <a href="https://twitter.com/MauroLu17424925" target="_blank" rel="noopener noreferrer">
          <BsTwitterX className={`${styles.icone} ${styles.twitter}`} />
        </a>
        <a href="https://www.linkedin.com/in/lucas-souza-gg1028/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={`${styles.icone} ${styles.linkedin}`} />
        </a>
        <a href="https://github.com/MauroLucasSouza1150" target="_blank" rel="noopener noreferrer">
          <FaGithub className={`${styles.icone} ${styles.github}`} />
        </a>
      </div>
    </section>
  )
}

export default Contatos