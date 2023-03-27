import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/teams/:teamName/matches" element={<MatchPage />}>
          </Route>
          <Route path="/teams/:teamName" element={<TeamPage />}>
          </Route>
          <Route path="/teams?" element={<HomePage />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
