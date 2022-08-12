

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

            { navIsActive && <div className={styles.backgorundDraver}  onClick={() => setNavIsActive((prev => !prev))}></div> }
            { navIsActive && <nav className={styles.menu}> </nav> }
        </div>

    )
}

export default MobileNav
