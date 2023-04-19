import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './Home';
import SignIn from './SignIn';
import { useAuthContext } from "../hooks/useAuthContext"; 

export default function App() {

  const { user } = useAuthContext();

  return (
    <div className="App">
      <Router>
        <Routes>        
          <Route path="/" element={ user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={ !user ? <SignIn /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

