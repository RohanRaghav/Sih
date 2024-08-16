import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
function App() {
  return (
    <div className="App">
      <Router>
                        <Routes>
                            <Route path="/Login" element={<Login />} />
                            <Route path="/Register" element={<Register  />} />
                            <Route path="/Dashboard" element={<Dashboard />} />
                            <Route path="/" element={<Main />} />
                        </Routes>
                    </Router>
    </div>
  );
}

export default App;
