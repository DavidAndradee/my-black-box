import styles from './Banner.module.css'



export default function Banner() {
    return (
        <div className={styles.banner}>
            <img src='/imagens/banner-david.png' alt='Banner' />
        </div>
    )
}