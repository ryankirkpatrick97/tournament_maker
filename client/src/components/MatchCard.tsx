import React from 'react';

interface MatchCardProps {
    matchNumber: number;
    teamA: string;
    teamB: string;
    time: string;
}

const MatchCard: React.FC<MatchCardProps> = ({ matchNumber, teamA, teamB, time }) => {
    return (
        <div className="match-card">
            <h3>Match {matchNumber}</h3>
            <p>{teamA} vs {teamB}</p>
            <p>Time: {time}</p>
        </div>
    );
};

export default MatchCard;