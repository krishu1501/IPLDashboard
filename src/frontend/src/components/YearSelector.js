import { React } from 'react';
import { Link } from 'react-router-dom';
import './YearSelector.scss';

export const YearSelector = ({teamName}) => {
    let years = [];
    const startYear = process.env.REACT_APP_MATCH_START_YEAR;
    const endYear = process.env.REACT_APP_MATCH_END_YEAR;
    for(let year=startYear; year<=endYear; year++){
        years.push(year);
    }
    return(
        <ol className="YearSelector">
            {years.map(year => <li>
                <Link to={`/teams/${teamName}/matches?year=${year}`}>{year}
                </Link>
                </li>)}
        </ol>
    )
}