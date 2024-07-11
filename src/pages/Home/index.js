import Banner from "../../components/Banner"
import Card from "../../components/Card"
import Menu from "../../components/Menu"
import styles from "./Home.module.css"
import Categorias from "../../components/Categorias"
import { useState } from "react"
import MOdalEditar from "../../components/ModalEditar"

export default function Home({ data }) {

    const [videos, setVideos] = useState(data)

    const categorias = [
        'Comédia',
        'Série',
        'Anime',
        'Maromba',
        'Variados'
    ]

    const handleDelete = async (id) => {
        try {
          const response = await fetch(`https://667c8fc13c30891b865d037a.mockapi.io/my-commerce-jso-server/videos/${id}`, {
            method: 'DELETE',
          });
    
          if (!response.ok) {
            throw new Error(`Erro ao deletar vídeo: ${response.status} - ${response.statusText}`);
          }
    
          setVideos(videos.filter(video => video.id !== id));
        } catch (error) {
          console.error('Erro ao deletar vídeo:', error);
        }
      };


    const [videoSelecionada, setVideoSelecionada] = useState(null)

    return (<>
        <Menu />
        <Banner />

        {categorias.map(dados => <Categorias key={dados} categoria={dados}>
            {<section className={styles.container}>
                {data.map((video) => {
                    if (video.categoria === dados) {
                        return <Card aoEditar={selecionado => setVideoSelecionada(videos)} {...video} key={video.id} id={video.id} onDelete={handleDelete} />
                    }
                })}
            </section>}
        </Categorias>)}
        <MOdalEditar video={videoSelecionada}></MOdalEditar>
    </>
    )
}