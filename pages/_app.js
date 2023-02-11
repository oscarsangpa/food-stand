import { StandProvider } from '../context/StandProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StandProvider>
       <Component {...pageProps} />
    </StandProvider>
  )
}

export default MyApp
