import Project from './pages/project-page/Project'
import "./index.css"; 
import { UserProvider } from './context/UserContext';

function App() {
  return(
    <UserProvider>
      <div>
        <Project/>
      </div>
    </UserProvider>
  );
}

export default App
