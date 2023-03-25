import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/teams/:teamName" element={<TeamPage/>}>
          </Route>
          <Route path="/teams/:teamName/matches" element={<MatchPage/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
