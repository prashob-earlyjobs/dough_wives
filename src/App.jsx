import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Story from './pages/Story'
import MenuPage from './pages/MenuPage'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Catering from './pages/Catering'
import Merch from './pages/Merch'
import Contact from './pages/Contact'
import Book from './pages/Book'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<Story />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
