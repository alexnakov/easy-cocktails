import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddSpec from './pages/AddSpec';
import LearnSpecs from './pages/LearnSpecs';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<AddSpec />} />
        <Route exact path="/study" element={<LearnSpecs />} />
        <Route exact path="/*" element={<h1>Nothing Here</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
