import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import ScrollToTop from './components/ScrollToTop.js';

import "./index.css"; 
import Discover from './pages/Discover/discover.jsx';
import Home from './pages/home/Home.jsx';
import Team from './pages/team-page/Team.jsx';
import Project from './pages/project-page/Project.jsx';

function App() {
  return(
    <UserProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/team' element={<Team />} />
          <Route path='/discover' element={<Discover />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}


export default App
