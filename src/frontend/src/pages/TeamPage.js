import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { PieChart } from '../components/PieChart';
import './TeamPage.scss';

export const TeamPage = () => {
    const [team, setTeam] = useState({});
    const { teamName } = useParams();
    useEffect(
        () => {
            const fetchTeam = async () => {
                const response = await fetch(`http://localhost:8080/team/${teamName}`);
                const team = await response.json();
                setTeam(team);
            }
            fetchTeam();
            console.log(team.totalWins, team.totalMatches-team.totalWins);
        }, [teamName]
    )
    if (!team.teamName) return <h1> Team Not found!!!</h1>
    return (
        <div className="TeamPage">
            <div className="team-name-section">
                <h1 className='team-name'>
                    <Link to={`/teams/${team.teamName}`}>{team.teamName}</Link>
                </h1>
            </div>
            <div className="win-loss-section">
                <div className="chart-container">
                <PieChart labels={['won', 'lost']} datasetLabel='Matches' data={[team.totalWins, team.totalMatches-team.totalWins]} backgroundColor={['#0a5e0a',
              '#9B3010']}/>
              </div>
            </div>
            <div className="match-detail-section">
                <h2>Latest Matches</h2>
                <MatchDetailCard match={team.matches ? team.matches[0] : null} teamName={team.teamName} />
            </div>
            {team.matches?.slice(1).map((match) => {
                return(
                <div className="match-small-section">
                    <MatchSmallCard match={match} teamName={team.teamName} />
                </div>)
            })}
            <div className="more-link"><a href="#">More &#62;</a></div>
        </div>

    );
}
