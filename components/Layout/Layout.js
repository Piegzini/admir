import React from 'react';
import Navigation from "../Navigation/Navigation";
import Head from "next/head";

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Centrum-ogrodzeń Admir</title>
                <meta name="description" content="Strona centrum ogrodzeń admir."/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="Konrad Piegza" />
                <meta name="keywords" content="ogrodzenia, panele, bramy, automaty, montaż" />
                <meta name="color-scheme" content="light" />
                <meta name="robots" content="index, follow /" />
                <meta name="language" content="Polish" />
            </Head>
            <Navigation />
            {children}
        </>
    );
};

export default Layout;
