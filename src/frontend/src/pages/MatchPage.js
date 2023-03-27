import { React, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';

export const MatchPage = () => {
  const [matches, setMatches] = useState();
  const {teamName} = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() =>{
    const fetchMatches = async () => {
      const year = searchParams.get("year");
      const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`)
      const matchList = await response.json();
      setMatches(matchList);
      console.log(matches);
    }
    fetchMatches();
  },[])
  if(!matches) return <h1>"No Match found!"</h1>;
  return (
    <div className="MatchPage">
        <h2>Matches</h2>
        <h1>{teamName}</h1>
        {matches?.map((match) => <MatchDetailCard match={match} teamName={teamName}/>)}
    </div>
    
  );
}

