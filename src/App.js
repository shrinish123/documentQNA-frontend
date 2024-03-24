import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
