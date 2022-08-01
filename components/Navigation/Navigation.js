import React from 'react';
import styles from '../../styles/navigation.module.sass'
import logo from '../../assets/logo.png'
import Image from "next/image";
const linksTitles = ["GALERIA", "OFERTA", "O NAS", "KONTAKT"]
const Navigation = () => {
    return (
        <header className={styles.header}>
            <figure className={styles.logo}>
              <Image src={logo} alt="Logo firmy Admir" />
            </figure>
            <nav>
                <ul className={styles.navigation_elements}>
                    {linksTitles.map( title => <li key={title} className={styles.navigation_element}>{title}</li>)}
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
