import styles from './ListaSuspensa.module.css'

export default function ListaSuspensa({ label, itens, valor, aoAlterado }) {
    return (
        <div className={styles.listaSuspensa}>
            <label>{label}</label>
            <select value={valor} onChange={evento => aoAlterado(evento.target.value)}>
                {itens.map(item =>
                    <option key={item}>{item}</option>
                )}
            </select>
        </div>
    )
}