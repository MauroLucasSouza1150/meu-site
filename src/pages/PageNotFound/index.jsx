import styles from './PageNotFound.module.css'

const PageNotFound = () => {
  return (
    <>
      <h2 className={styles.h2_erro}>Ops! Algo deu Errado</h2>
      <div className={styles.container_erro}>
        <span className={styles.numero_erro}>404</span>
        <strong className={styles.msg_erro}>Página Não Encontrada!</strong>
      </div>
    </>
  )
}

export default PageNotFound