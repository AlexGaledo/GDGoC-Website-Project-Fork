import Project from './pages/project-page/Project'
import "./index.css"; 
import { UserProvider } from './context/UserContext';

import AnimationBackground from './components/AnimationBackground/AnimationBackground';

function App() {
  return(
    <UserProvider>
      <div>
        <Project/>
      </div>
    </UserProvider>
    // <AnimationBackground/>
  );
}

export default App
