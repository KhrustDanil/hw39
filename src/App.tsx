import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Albums from "./components/Albums";
import About from "./components/About";
import Album from "./components/Album";
import { AlbumsProvider } from "./context/AlbumsProvider";



function App() {
  return (
    <AlbumsProvider>
        <Router>
          <header className="p-10 bg-gray-400">
            <nav className="navigation">
              <ul className="flex ml-80">
                <li className="ml-60 font-bold text-2xl hover:text-white"><Link to="/">Головна</Link></li>
                <li className="ml-60 font-bold text-2xl hover:text-white"><Link to="/albums">Альбоми</Link></li>
                <li className="ml-60 font-bold text-2xl hover:text-white"><Link to="/about">Про проект</Link></li>
              </ul>
            </nav>
          </header>
            <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route path="/albums" element={<Albums></Albums>} />
              <Route path="/about" element={<About></About>} />
              <Route path="/albums/:id" element={<Album></Album>} />
            </Routes>
        </Router>
    </AlbumsProvider>
  );
}

export default App;
