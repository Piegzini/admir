import React from 'react';
import styles from '../../styles/navigation.module.sass'
import logo from '../../assets/logo.png'
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

const linksTitles = [{title: "O NAS", link:"/"}, {title: "OFERTA", link:"/oferta"}, {title: "GALERIA", link:"/galeria"},   {title: "KONTAKT", link:"/kontakt"}]
const Navigation = () => {
    const router = useRouter()
    return (
        <header className={styles.header}>
            <figure className={styles.logo}>
              <Image src={logo} alt="Logo firmy Admir" />
            </figure>
            <nav>
                <ul className={styles.navigation_elements}>
                    {linksTitles.map( ({title, link}) =>
                        (<li key={title}
                             className={[styles.navigation_element, router.pathname === link ? styles.active : ''].join(' ')}>
                            <Link href={link}><a>{title}</a></Link>
                        </li>))}
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
