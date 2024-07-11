import styles from './Categorias.module.css'

export default function Categorias({categoria, cor, children}){

    return(
        <section className={styles.categoria}>
            <h3 style={{backgroundColor: cor}} >{categoria}</h3>
            {children}
        </section>
    )

}