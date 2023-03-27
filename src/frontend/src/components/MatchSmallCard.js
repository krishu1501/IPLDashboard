import { React } from 'react';
import { Link } from 'react-router-dom';
import './MatchSmallCard.scss';

export const MatchSmallCard = ({ match, teamName }) => {
  const otherTeam = match.team1 !== teamName ? match.team1 : match.team2;
  const isMatchWon = teamName === match.matchWinner;
  return (
    <div className={isMatchWon ? "MatchSmallCard won-card" : "MatchSmallCard lost-card"}>
      <p>vs</p><h2> <Link to={`/teams/${otherTeam}`}>{otherTeam}</Link></h2>
      <p>{match.date}</p>
      <p>at {match.venue}</p>
      <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
    </div>

  );
}

