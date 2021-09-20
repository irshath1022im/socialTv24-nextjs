import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Layouts from './components/Layouts'

function MyApp({ Component, pageProps }) {
  return(
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )
}

export default MyApp
