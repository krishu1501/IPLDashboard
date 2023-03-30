import { React } from 'react';
import { Link } from 'react-router-dom';
import './MatchDetailCard.scss';

export const MatchDetailCard = ({ match, teamName }) => {
  if (!match) return null;
  const otherTeam = match.team1 !== teamName ? match.team1 : match.team2;
  const isMatchWon = teamName===match.matchWinner;
  return (
    <div className={isMatchWon ? "MatchDetailCard won-card" : "MatchDetailCard lost-card"}>
      <div className="match-detail-tile1">
        <p>vs</p><h1> <Link to={`/teams/${otherTeam}`}>{otherTeam}</Link></h1>
        <h3 className="match-date">{match.date}</h3>
        <h3 className="match-venue">at {match.venue}</h3>
        <h3 className="match-toss-winner">{match.tossWinner} won the toss and chose to {match.tossDecision}</h3>
      </div>
      <div className="match-detail-tile2">
        {/* if there was an eliminator then team won by superover */}
        <h3>{match.matchWinner} won by {match.eliminator ? "": match.resultMargin} {match.result}</h3>
        <h4>Man of the Match </h4><p> {match.playerOfMatch} </p>
        <h4>Umpire1</h4>
        <p>{match.umpire1}</p>
        <h4>Umpire2</h4>
        <p>{match.umpire2}</p>
      </div>
    </div>

  );
}

