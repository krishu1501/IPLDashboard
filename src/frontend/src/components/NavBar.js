import { React } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = () => {
    return(
        <div className="NavBar">
            <h2><Link to="/">Home</Link></h2>
            <h2><Link to="/teams">Teams</Link></h2>
            <h2><Link to={`/teams/Mumbai Indians/matches?year=${process.env.REACT_APP_MATCH_END_YEAR}`}>Matches</Link></h2>
        </div>
    )
}