import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <BrowserRouter>
    <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}
export default App;