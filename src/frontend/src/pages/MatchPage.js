import { React, useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { YearSelector } from '../components/YearSelector';
import './MatchPage.scss';

export const MatchPage = () => {
  const [matches, setMatches] = useState();
  const { teamName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [year, setYear] = useState(process.env.REACT_APP_MATCH_END_YEAR);
  useEffect(() => {
    const fetchMatches = async () => {
      const matchYear = searchParams.get("year");
      setYear(matchYear);
      const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${matchYear}`)
      const matchList = await response.json();
      setMatches(matchList);
    }
    fetchMatches();
  }, [teamName, searchParams])
  if (!matches) return <h1>"No Match found!"</h1>;
  return (
    <div className="MatchPage">
      <div className="year-selector">
        <h3>Select Year</h3>
        <YearSelector teamName={teamName} />
      </div>
      <div className="Matches">
        <h1 className="heading-section">
          <Link to={`/teams/${teamName}`}> {teamName} </Link> matches in {year}
        </h1>
        {matches?.length === 0 ?
          <h2>No matches in {year}</h2> :
          matches.map((match) => <MatchDetailCard match={match} teamName={teamName} />)}
      </div>
    </div>

  );
}

