
import Formulario from '../../components/Formulario'
import Menu from '../../components/Menu'
import styles from './NovoVideo.module.css'
import { NovoCardContext } from '../../context/NovoCard';

export default function NovoVideo({ data }) {

    const aoNovoVideo = async (video) => {
        console.log(video);
        try {
            const response = await fetch('https://667c8fc13c30891b865d037a.mockapi.io/my-commerce-jso-server/videos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(video),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar vídeo');
            }

        } catch (error) {
            console.error('Erro ao enviar vídeo:', error.message);
        }
    };

    return (<>

        <Menu />
        <Formulario aoNovoVideo={aoNovoVideo}></Formulario>

    </>
    )
}