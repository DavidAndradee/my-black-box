import styles from './CampoTexto.module.css'

export default function CampoTexto ({valor, label, placeholder, aoAlterado}){

    const aoDigitado = (evento) =>{
        aoAlterado(evento.target.value)
    }

    return (
        <div className={styles.campoTexto}>
            <label>{label}</label>
            <input value={valor} onChange={aoDigitado} required placeholder={placeholder}/>
        </div>
    )
}