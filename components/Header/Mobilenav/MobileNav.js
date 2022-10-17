import {
    active,
    backgroundDimmer,
    menu,
    navigation,
    navigation_element,
    navigation_elements,
    toggleButton
} from './mobileNav.module.sass';
import React, {useState} from "react";
import {BiMenu, BiX} from "react-icons/bi";
import navigationLinksData from "../../../assets/navigationLinksData.json";
import NavLink from "../Navigation /NavLink";
import cn from "classnames";
import {useRouter} from "next/router";

const MobileNav = () => {
    const [isNavigationActive, setNavIsActive] = useState(false);
    const router = useRouter();

    const isActive = href => router.pathname === href ? active : '';

    return (
        <div className={navigation}>
            <button type="button" className={toggleButton} onClick={() => setNavIsActive((prev => !prev))}>
                {!isNavigationActive ?
                    <BiMenu color='white' width="30" height="30"/> :
                    <BiX color='white' width="30" height="30"/>
                }
            </button>

            <nav className={cn(menu, {[active]: isNavigationActive})}>
                <ul className={navigation_elements}>
                    {navigationLinksData.map(({title, href}) =>
                        (<li key={title} className={`${navigation_element} ${isActive(href)}`}>
                            <NavLink href={href} title={title.toLowerCase()}/>
                        </li>)
                    )}
                </ul>
            </nav>

            {isNavigationActive && <div className={backgroundDimmer} onClick={() => setNavIsActive((prev => !prev))}/>}

        </div>

    );
};

export default MobileNav;
