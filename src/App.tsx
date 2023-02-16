import { FC } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import RoutesManager from './components/RoutesManager'
import Header from './components/Header'
import Footer from './components/Footer'

// App without react-router, useful for testing
const App: FC = () => {
  return (
    <>
      <Header />
      <RoutesManager />
      <Footer />
    </>
  )
}

export const WrappedApp = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default App
