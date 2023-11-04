import './App.css';
import ListRepairRequests from './components/ListRepairRequests';
// import Header from './components/Header';
// import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateRequest from './components/CreateRequest';
import UpdateRequest from './components/UpdateRequest';
import SideBar from './components/SideBar';
import Home from './pages/Home';


const App = () => {
  return (
    <Router>
      <div>
        <SideBar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/requests" element={<ListRepairRequests />} />
            <Route path="/addrequest" element={<CreateRequest />} />
            <Route path="/updaterequest/:requestId" element={<UpdateRequest />} />
            <Route path="/updaterequest" element={<UpdateRequest />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
