
import './App.css';
import CompListPage from './pages/compList';
import Index from './pages/index';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Index/>}></Route>
     <Route path="/complist/*" element={<CompListPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
