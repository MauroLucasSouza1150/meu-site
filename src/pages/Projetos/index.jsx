import styles from './Projetos.module.css'
import Card from "../../components/Card"

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";


const Projetos = () => {
  return (
    <section className={styles.projetos_container}>
      <h2 className={styles.h2_projetos}>Principais Projetos</h2>
      <section className={styles.lista}>
        <Card titulo={"Cardápio Digital"}
          imagemUrl={"/src/pages/Projetos/image/cardapio-digital.jpeg"}
          descricao={"Projeto de um Cardápio Digital de uma hamburgueria, onde o cliente poderá fazer seu pedido, e colocar no carrinho de compras, lemrbre-se a loja só abre as 18:00 horas."}
          url={"https://cardapio-hamburgueria-orcin.vercel.app/"} 
          icones={[FaHtml5, FaCss3Alt, FaJs]} />

        <Card titulo={"Formulário de Validação"}
          imagemUrl={"/src/pages/Projetos/image/formulario-validacao.jpeg"}
          descricao={"Projeto de um formulário de validação, onde o usuário preencherá seu feedback sobre um produto, responderá algumas perguntas, sobre como foi sua Satisfação com tal produto."}
          url={"https://maurolucassouza1150.github.io/react-ts-multistep/"} 
          icones={[FaReact, BiLogoTypescript]}/>

        <Card titulo={"Landing Page"}
          imagemUrl={"/src/pages/Projetos/image/landing-page.jpeg"}
          descricao={"Projeto de uma Landing Page, o usuário deverá cadastrar seu e-mail corretamente,um dos desafios foi a integração de duas janelas modal, onde elas aparecem dependendo de como foi preenchido o formulário."}
          url={"https://maurolucassouza1150.github.io/Desafio-Landing-page/"} 
          icones={[FaHtml5, FaCss3Alt, FaJs]} />

      </section>
    </section>
  )
}

export default Projetos