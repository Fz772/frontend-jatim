import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './view/Dashboard';
import './assets/css/bootstrap.css';
import './assets/css/custom.css';
import Login from './view/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
