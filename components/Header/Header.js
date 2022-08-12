import React, {useEffect, useState} from 'react';
import styles from '../../styles/navigation.module.sass'
import logo from '../../assets/logo.png'
import Image from "next/image";
import Navigation from "./Navigation /Navigation";
import MobileNav from "./Mobilenav/MobileNav";

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, []);


    return (
        <header className={styles.header}>
            <figure className={styles.logo}>
              <Image src={logo}  alt="Admir company logo" />
            </figure>

            { windowWidth < 768 ? <MobileNav /> : < Navigation /> }


        </header>
    );
};

export default Header;
