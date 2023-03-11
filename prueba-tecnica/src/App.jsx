import './App.css'
import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series'
import Login from './pages/Login';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route>
              <Route path="/" element={<Home />} />
              <Route
                  path="/movies"
                  element={
                    <ProtectedRoute>
                      <Movies />
                    </ProtectedRoute>
                  }
              />
              <Route
                  path="/series"
                  element={
                    <ProtectedRoute>
                      <Series />
                    </ProtectedRoute>
                  }
              />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      <Footer />
    </div>
  )
}

export default App
