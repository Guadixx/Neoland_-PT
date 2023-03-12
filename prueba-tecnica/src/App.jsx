import './App.css'
import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series'
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies /> }/>
              <Route path="/series" element={ <Series /> }/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      <Footer />
    </div>
  )
}

export default App
