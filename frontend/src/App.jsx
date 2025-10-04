import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

import "./index.css"; 

import Home from './pages/home/Home.jsx';
import Team from './pages/team-page/Team.jsx';
import Project from './pages/project-page/Project.jsx';

import ChangePassword from './components/ChangePassword/ChangePassword.jsx';
import LogIn from './components/LogIn/LogIn.jsx';

function App() {
  return(
    <UserProvider>
      <Router>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}


export default App
