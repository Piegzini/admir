import React from 'react';
import Header from "../Header/Header";
import Head from "next/head";
import Footer from "../Footer/Footer";

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
            <Header />
            {children}
            {/*<Footer />*/}
        </>
    );
};

export default Layout;
