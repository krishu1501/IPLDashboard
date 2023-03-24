import { React, useEffect, useState} from 'react';
import MatchDetailCard from '../components/MatchDetailCard';
import MatchSmallCard from '../components/MatchSmallCard';

export const TeamPage = () => {
    const [team, setTeam] = useState({});
    useEffect(
        () => {
            const fetchTeam = async () => {
                const response = await fetch('http://localhost:8080/team/Chennai Super Kings');
                const team = await response.json();
                setTeam(team);
            }
            fetchTeam();
        }, []
    )
  return (
    <div className="TeamPage">
        <h1>{team.teamName}</h1>
        <MatchDetailCard match={team.matches? team.matches[0]:null}/>
        {team.matches?.slice(1).map((match) => <MatchSmallCard match={match}/>)}
    </div>
    
  );
}

export default TeamPage;
