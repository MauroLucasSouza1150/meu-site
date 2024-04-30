import styles from './Card.module.css'

import { IoIosArrowForward } from "react-icons/io";

function Card({ titulo, imagemUrl, descricao, url, icones}) {
    return (
        <section className={styles.card}>
            <h3>{titulo}</h3>
            <div className={styles.img_container}>
                <img src={imagemUrl} alt={titulo} className={styles.img}/>
            </div>
            <p>{descricao}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                {icones.map((Icon, index) => (
                        <Icon key={index} />
                    ))}
                </div>
                <a href={url} target='_blank' rel="noopenner norefferer" className={styles.btn_card}>
                    <IoIosArrowForward />
                </a>
            </div>
        </section>
    )
}

export default Card