import React from 'react';
import styles from '../../styles/navigation.module.sass';
import logo from '../../assets/logo.png';
import Image from "next/image";
import Navigation from "./Navigation /Navigation";
import MobileNav from "./Mobilenav/MobileNav";
import useWindowSize from "../../helpers/useWindowSize";

const Header = () => {
    const [width] = useWindowSize();

    return (
        <header className={styles.header}>
            <figure className={styles.logo}>
                <Image src={logo} alt="Admir company logo"/>
            </figure>

            {width < 768 ? <MobileNav/> : < Navigation/>}


        </header>
    );
};

export default Header;
