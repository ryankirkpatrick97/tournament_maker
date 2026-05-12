export const isValidPlayerCount = (players: number): boolean => {
    return players >= 4; // Minimum players required for a match
};

export const isValidMatchTime = (startTime: Date, endTime: Date): boolean => {
    return startTime < endTime; // Ensure start time is before end time
};

export const isPlayerAvailable = (playerId: string, unavailablePlayers: string[]): boolean => {
    return !unavailablePlayers.includes(playerId); // Check if player is not in the unavailable list
};

export const isValidTeamSize = (team: string[], maxTeamSize: number): boolean => {
    return team.length <= maxTeamSize; // Ensure team does not exceed maximum size
};