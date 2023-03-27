import { React, useState, useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { TeamTile } from '../components/TeamTile';
import './HomePage.scss';

export const HomePage = () => {
    const [teams, setTeams] = useState([]);
    useEffect(
        () => {
            const fetchTeams = async () => {
                const response = await fetch(`http://localhost:8080/team`);
                const teamsList = await response.json();
                setTeams(teamsList);
            }
            fetchTeams();
        }, []
    )
    return (
        <div className="HomePage">
        <NavBar/>
        <div className="heading-section">
            <h1>IPL Dashboard</h1>
        </div>
        <div className="team-grid">
            {teams?.map(team => <TeamTile teamName={team.teamName}/>)}
        </div>
        </div>
    );
}