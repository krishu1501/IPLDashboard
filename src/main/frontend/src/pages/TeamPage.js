import { React, useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import MatchDetailCard from '../components/MatchDetailCard';
import MatchSmallCard from '../components/MatchSmallCard';

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
        }, [teamName]
    )
    if(!team.teamName) return <h1> Team Not found!!!</h1>
  return (
    <div className="TeamPage">
        <h1>
            <Link to={`/teams/${team.teamName}`}>{team.teamName}</Link>
        </h1>
        <h2>Latest Matches</h2>
        <MatchDetailCard match={team.matches ? team.matches[0] : null} teamName={team.teamName}/>
        {team.matches?.slice(1).map((match) => <MatchSmallCard match={match} teamName={team.teamName}/>)}
    </div>
    
  );
}

export default TeamPage;
