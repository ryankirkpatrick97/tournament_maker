import React, { useState } from 'react';

const PlayerForm: React.FC = () => {
    const [playerName, setPlayerName] = useState('');
    const [playerSkill, setPlayerSkill] = useState('');
    const [csvFile, setCsvFile] = useState<File | null>(null);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.target.value);
    };

    const handleSkillChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPlayerSkill(e.target.value);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setCsvFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to handle form submission, e.g., sending data to the server
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="playerName">Player Name:</label>
                <input
                    type="text"
                    id="playerName"
                    value={playerName}
                    onChange={handleNameChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="playerSkill">Skill Level:</label>
                <select
                    id="playerSkill"
                    value={playerSkill}
                    onChange={handleSkillChange}
                    required
                >
                    <option value="">Select Skill Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
            </div>
            <div>
                <label htmlFor="csvFile">Upload CSV:</label>
                <input
                    type="file"
                    id="csvFile"
                    accept=".csv"
                    onChange={handleFileChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PlayerForm;