import Home from './pages/Home'
import View from './pages/View';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/view/:id' element={<View/>} />
    </Routes>
    <Toaster/>
    <Footer/>
    </>
  )
}

export default App
