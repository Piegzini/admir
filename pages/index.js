import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";

export default function Home() {
  return (
    <div>
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
    </div>
  )
}
