
import './App.css';
// import CompInfo from './pages/compInfo';
// import CompInfoListPage from './pages/compInfoList';
// import Index from './pages/index';
// import MatCheakPage from './pages/matCheak';
// import ApplyFormPage from './pages/applyForm';
// import CompOpenPage from './pages/1_manager/compOpen';
// import CompPlayerListPage from './pages/1_manager/compPlayerList';
import MakeSummaryPage from './pages/1_manager/makeSummary';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/1_manager/login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Index/>}></Route> */}
        <Route path="/" element={<LoginPage/>}></Route>
        {/* <Route path="/complist/*" element={<CompInfoListPage/>}></Route> */}
        {/* <Route path="/compinfo/*" element={<CompInfo/>}></Route> */}
        {/* <Route path="/matCheak/*" element={<MatCheakPage/>}></Route> */}
        {/* <Route path="/applyComp/*" element={<ApplyFormPage/>}></Route> */}
        {/* <Route path="/managerIndex/compOpenPage*" element={<CompOpenPage/>}></Route> */}
        {/* <Route path="/managerIndex/compPlayerList*" element={<CompPlayerListPage/>}></Route> */}
        <Route path="/makeSummary*" element={<MakeSummaryPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
