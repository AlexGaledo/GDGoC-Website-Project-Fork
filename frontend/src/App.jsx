import Project from './pages/project-page/Project'
import "./index.css"; 
import { UserProvider } from './context/UserContext';
import Home from './pages/home/Home.jsx';

function App() {
  return(
    <UserProvider>
      <div>
        <Home />
        {/*<Project/>*/}
      </div>
    </UserProvider>
  );
}

export default App
