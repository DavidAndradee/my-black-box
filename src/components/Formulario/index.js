import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import styles from "./Formulario.module.css"

export default function Formulario({aoNovoVideo, videos}) {

    const categorias = [
        'Comédia',
        'Série',
        'Anime',
        'Maromba',
        'Variados'
     ]

    const [titulo, setTitulo] = useState('')
    const [capa, setCapa] = useState('')
    const [link, setLink] = useState('')
    const [categoria, setCategoria] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        aoNovoVideo({
            titulo,
            capa,
            link,
            categoria
        })

        setTitulo('')
        setCapa('')
        setLink('')
        setCategoria('')
    }

    return (
        <section className={styles.formulario}>
            <form onSubmit={aoSalvar}>
            <h2> ☘︎ Novo Card ☘︎ </h2>
                <CampoTexto valor={titulo} aoAlterado={valor => setTitulo(valor)} label="Título" placeholder="Informe o título"></CampoTexto>
                <CampoTexto valor={capa} aoAlterado={valor => setCapa(valor)} label="Capa" placeholder="Informe a imagem da capa"></CampoTexto>
                <CampoTexto valor={link} aoAlterado={valor => setLink(valor)} label="Link" placeholder="Informe o link"></CampoTexto>
                <ListaSuspensa valor={categoria} aoAlterado={valor => setCategoria(valor)} label="Categoria" itens={categorias}></ListaSuspensa>
                <Botao>criar card</Botao>
            </form>
        </section>
    )
}