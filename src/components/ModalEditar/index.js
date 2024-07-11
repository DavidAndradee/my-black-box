import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import styles from './ModalEditar.module.css'

export default function MOdalEditar({ video }) {
    return (<>
    <div className={styles.overlay}>

        <dialog open={!!video} className={styles.box}>
            <p>Editar Card</p>
            <form method="dialog">
                <CampoTexto  placeholder="Novo título"></CampoTexto>
                <CampoTexto  placeholder="Nova imagem da capa"></CampoTexto>
                <CampoTexto  placeholder="Novo link"></CampoTexto>
                <Botao>Editar Card</Botao>
            </form>
        </dialog>
    </div>

    </>
    )
}