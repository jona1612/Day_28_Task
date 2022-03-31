import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Dashbox from './Dashbox';
import Table from './table';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.css';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateUser from './CreateUser';
import View from './View';
import { UserProvider } from './Usercontext';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('Jonathan');
  const [users, setUsers] = useState([]);

  return (
    <BrowserRouter>
      <div id="wrapper">
        <UserProvider value={{ userName, setUserName, users, setUsers }}>
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar />
              <Routes>
                <Route path="/tables" element={<Table />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/create-user" element={<CreateUser />}></Route>
                <Route path="/view/:id" element={<View />}></Route>
              </Routes>
            </div>
          </div>
        </UserProvider>
      </div>
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2021</span>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;