import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Filmes from './components/pages/Filmes'
import Settings from './components/pages/Settings'
import Sobre from './components/pages/Sobre'
import Container from './components/layout/Container'
import Navbar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/sobre" element={<Sobre />} />
        </Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
