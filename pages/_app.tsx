import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {



  // 2. Extend the theme to include custom colors, fonts, etc
  const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }

  const theme = extendTheme({ colors })
  return (
    <>
      <ChakraProvider theme={theme}>
        <Navbar />
        {/* <div style={{ paddingTop: 96 }}> */}
          <Component {...pageProps} />
        {/* </div> */}
      </ChakraProvider>
    </>
  )
}

export default MyApp
