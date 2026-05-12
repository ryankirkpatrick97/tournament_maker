import React, { useState } from 'react';
import { Player } from '../types';
import MatchCard from './MatchCard';
import PlayerForm from './PlayerForm';
import useScheduler from '../hooks/useScheduler';

const Scheduler: React.FC = () => {
    const { schedule, addPlayer, generateSchedule } = useScheduler();
    const [players, setPlayers] = useState<Player[]>([]);

    const handleAddPlayer = (player: Player) => {
        setPlayers((prevPlayers) => [...prevPlayers, player]);
        addPlayer(player);
    };

    const handleGenerateSchedule = () => {
        generateSchedule();
    };

    return (
        <div>
            <h1>Coed Volleyball Mixer Scheduler</h1>
            <PlayerForm onAddPlayer={handleAddPlayer} />
            <button onClick={handleGenerateSchedule}>Generate Schedule</button>
            <div>
                {schedule.map((match, index) => (
                    <MatchCard key={index} match={match} />
                ))}
            </div>
        </div>
    );
};

export default Scheduler;