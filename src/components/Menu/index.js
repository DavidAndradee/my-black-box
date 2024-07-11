import MenuLink from '../MenuLink'
import styles from './Menu.module.css'

import { Link, useLocation } from 'react-router-dom'

export default function Menu() {

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to='/'>
                    Home
                </MenuLink>
                <MenuLink to="./create-video">
                    Novo video
                </MenuLink>
            </nav>
        </header>
    )
}