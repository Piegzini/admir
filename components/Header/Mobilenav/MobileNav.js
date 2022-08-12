

import styles from './mobileNav.module.sass'
import React, {useState} from "react";
import { BiMenu , BiX} from "react-icons/bi";

import navigationLinksData from "../../../assets/navigationLinksData.json";
import NavLink from "../Navigation /NavLink";
import {useRouter} from "next/router";

const MobileNav = () => {
    const [navIsActive, setNavIsActive] = useState(false)

    const router = useRouter()
    const isActive = (href) => router.pathname === href ? styles.active : ''

    return (
        <div>
            <button className={styles.hamburger} onClick={() => setNavIsActive((prev => !prev))}>
                {!navIsActive ?
                    <BiMenu color='white' width="30" height="30"/> :
                    <BiX color='white' width="30" height="30"/>
                }
            </button>

            <div className={`${styles.backgorund_draver} ${navIsActive ? styles.active : ''}`}  onClick={() => setNavIsActive((prev => !prev))}></div>

            <nav className={`${styles.menu} ${navIsActive ? styles.active : ''}`}>
                <ul className={styles.navigation_elements}>
                    {navigationLinksData.map( ({title, href}) =>
                        (<li key={title} className={`${styles.navigation_element} ${isActive(href)}`}>
                            <NavLink href={href} title={title.toLowerCase()} />
                        </li>)
                    )}
                </ul>

            </nav>
        </div>

    )
}

export default MobileNav
