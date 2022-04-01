import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './Users';
import CreateUser from './CreateUser';
// import Table from './Table';

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/create-user" element={<CreateUser />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
