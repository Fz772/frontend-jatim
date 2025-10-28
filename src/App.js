import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './view/Dashboard';
import './assets/css/bootstrap.css';
import './assets/css/custom.css';
import Login from './view/Login';
import RequestValidation from './view/RequestValidation';
import RequestJob from './view/RequestJob';
import RequestJobApp from './view/RequestJobApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<Login />} />
        <Route path='/validation/request' element={<RequestValidation />} />
        <Route path='/job-vacancies' element={<RequestJob />} />
        <Route path='/job-vacancies/:id' element={<RequestJobApp /> } />
      </Routes>
    </Router>
  );
}

export default App;
