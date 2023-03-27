import { React } from 'react';
import { Link } from 'react-router-dom';
import './TeamTile.scss';

export const TeamTile = ({teamName}) => {
    return (
        <div className="TeamTile">
            <h3>
                <Link to={`/teams/${teamName}`}>{teamName}</Link>
            </h3>
        </div>
    );
}