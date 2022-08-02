import React from 'react';
import styles from '../../styles/navigation.module.sass'
import logo from '../../assets/logo.png'
import Image from "next/image";
import {useRouter} from "next/router";
import navigationLinksData from "../../assets/navigationLinksData.json"
import NavLink from "./NavLink";

const Navigation = () => {
    const router = useRouter()

    const isActive = (href) => router.pathname === href ? styles.active : ''
    return (
        <header className={styles.header}>
            <figure className={styles.logo}>
              <Image src={logo} alt="Logo firmy Admir" />
            </figure>
            <nav>
                <ul className={styles.navigation_elements}>
                    {navigationLinksData.map( ({title, href}) =>
                        (<li key={title} className={`${styles.navigation_element} ${isActive(href)}`}>
                            <NavLink href={href} title={title} />
                        </li>)
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
