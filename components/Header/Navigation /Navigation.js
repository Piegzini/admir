import styles from "../../../styles/navigation.module.sass";
import navigationLinksData from "../../../assets/navigationLinksData.json";
import NavLink from "./NavLink";
import React from "react";
import {useRouter} from "next/router";
const Navigation = () => {
    const router = useRouter()
    const isActive = (href) => router.pathname === href ? styles.active : ''

    return (
        <nav>
            <ul className={styles.navigation_elements}>
                {navigationLinksData.map( ({title, href}) =>
                    (<li key={title} className={`${styles.navigation_element} ${isActive(href)}`}>
                        <NavLink href={href} title={title} />
                    </li>)
                )}
            </ul>
        </nav>
    )
}

export default Navigation
