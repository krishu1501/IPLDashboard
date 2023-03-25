import { React } from 'react';
import { Link } from 'react-router-dom';

export const MatchDetailCard = ({match, teamName}) => {
    if(!match) return null;
    const otherTeam = match.team1!==teamName ? match.team1 : match.team2;
  return (
    <div className="MatchDetailCard">
        <h2>vs <Link to={`/teams/${otherTeam}`}>{otherTeam}</Link></h2>
        <h3>{match.date}</h3>
        <h3>at {match.venue}</h3>
        <h3>{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
    </div>
    
  );
}

export default MatchDetailCard;
