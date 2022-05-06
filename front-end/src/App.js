import './App.css';
import Login from './pages/login/login';
import Search from './pages/search/search';
import SignUp from './pages/signup/signup';
import { AppRouter } from './routes/routes';

function App() {
  return (
    <div className="App">
        <AppRouter/>
    </div>
  );
}

export default App;
