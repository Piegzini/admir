import '../styles/globals.sass'
import 'normalize.css/normalize.css';
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )

}

export default MyApp
