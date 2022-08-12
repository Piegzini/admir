

import styles from './mobileNav.module.sass'
import {useState} from "react";
import { BiMenu , BiX} from "react-icons/bi";

const MobileNav = () => {
    const [navIsActive, setNavIsActive] = useState(false)
    return (
        <div>
            <button className={styles.hamburger} onClick={() => setNavIsActive((prev => !prev))}>

                {!navIsActive ?
                    <BiMenu color='white' width="30" height="30"/> :
                    <BiX color='white' width="30" height="30"/>
                }
            </button>

            <div className={`${styles.backgorundDraver} ${navIsActive ? styles.active : ''}`}  onClick={() => setNavIsActive((prev => !prev))}></div>
            <nav className={`${styles.menu} ${navIsActive ? styles.active : ''}`}> </nav>
        </div>

    )
}

export default MobileNav
