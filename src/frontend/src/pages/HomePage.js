import { React, useState, useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { TeamTile } from '../components/TeamTile';
import './HomePage.scss';

export const HomePage = () => {
    const [teams, setTeams] = useState([]);
    useEffect(
        () => {
            const fetchTeams = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
                const teamsList = await response.json();
                setTeams(teamsList);
            }
            fetchTeams();
        }, []
    )
    if(teams.length === 0) return null;
    return (
        <div className="HomePage">
        <NavBar/>
        <div className="heading-section">
            <h1>IPL Dashboard</h1>
        </div>
        <div className="team-grid">
            {teams?.map(team => <TeamTile key={team.id} teamName={team.teamName}/>)}
        </div>
        </div>
    );
}