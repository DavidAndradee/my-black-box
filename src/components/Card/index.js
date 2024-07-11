import styles from './Card.module.css'

export default function Card({id, titulo, capa, onDelete, aoEditar}) {
    return(
        <div className={styles.container}>
            <div>
                <img src={capa} alt={titulo} className={styles.capa}></img>
                <h2>{titulo}</h2>
            </div>
            <div className={styles.botoes}>
                <button onClick ={aoEditar} >editar</button>
                <button onClick={() => onDelete(id)}>deletar</button>
            </div>

        </div>
        
    )
}