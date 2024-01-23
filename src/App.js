
import './App.css';
import CompInfo from './pages/compInfo';
import CompInfoListPage from './pages/compInfoList';
import Index from './pages/index';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import MatCheakPage from './pages/matCheak';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/complist/*" element={<CompInfoListPage/>}></Route>
        <Route path="/compinfo/*" element={<CompInfo/>}></Route>
        <Route path="/matCheak/*" element={<MatCheakPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
