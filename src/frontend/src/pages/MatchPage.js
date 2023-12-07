import { React, useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { NavBar } from '../components/NavBar';
import { YearSelector } from '../components/YearSelector';
import './MatchPage.scss';

export const MatchPage = () => {
  const [matches, setMatches] = useState();
  const { teamName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [year, setYear] = useState(process.env.REACT_APP_MATCH_END_YEAR);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMatches = async () => {
      const matchYear = searchParams.get("year");
      if(isNaN(matchYear)){
        setError({message: "Invalid Year selected"});
        return;
      }
      setYear(matchYear);
      const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${matchYear}`);
      if(response.status == 404){
        setError({message: "No Matches found"});
        return;
      }
      const matchList = await response.json();
      setMatches(matchList);
      setError(null);
    }
    fetchMatches();
  }, [teamName, searchParams])
  if (error != null) return <h1> {error.message} </h1>;
  if (!matches) return <h1> Loading matches... </h1>;
  return (
    <div className="MatchPage">
      <NavBar/>
      <div className='match-page-content'>
        <div className="year-selector">
          <h3>Select Year</h3>
          <YearSelector teamName={teamName} />
        </div>
        <div className="matches-section">
          <h1 className="heading-section">
            <Link to={`/teams/${teamName}`}> {teamName} </Link> matches in {year}
          </h1>
          {matches?.length === 0 ?
            <h2>No matches in {year}</h2> :
            matches.map((match) => <MatchDetailCard key={match.id} match={match} teamName={teamName} />)}
        </div>
      </div>
    </div>

  );
}

