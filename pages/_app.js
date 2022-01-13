import '../styles/globals.css'
import "../node_modules/materialize-css/dist/css/materialize.min.css"
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp
