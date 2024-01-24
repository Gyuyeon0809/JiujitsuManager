
import './App.css';
import CompInfo from './pages/compInfo';
import CompInfoListPage from './pages/compInfoList';
import Index from './pages/index';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import MatCheakPage from './pages/matCheak';
import ApplyFormPage from './pages/applyForm';
import LoginPage from './pages/1_manager/login';
import CompOpenPage from './pages/1_manager/compOpen';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/complist/*" element={<CompInfoListPage/>}></Route>
        <Route path="/compinfo/*" element={<CompInfo/>}></Route>
        <Route path="/matCheak/*" element={<MatCheakPage/>}></Route>
        <Route path="/applyComp/*" element={<ApplyFormPage/>}></Route>
        <Route path="/managerIndex/*" element={<LoginPage/>}></Route>
        <Route path="/managerIndex/compOpenPage*" element={<CompOpenPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
