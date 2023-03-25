import { React } from 'react';
import { Link } from 'react-router-dom';

export const MatchSmallCard = ({ match, teamName }) => {
  const otherTeam = match.team1 !== teamName ? match.team1 : match.team2;
  return (
    <div className="MatchSmallCard">
      <h3>vs <Link to={`/teams/${otherTeam}`}>{otherTeam}</Link></h3>
      <p>{match.date}</p>
      <p>at {match.venue}</p>
      <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>    </div>

  );
}

export default MatchSmallCard;
