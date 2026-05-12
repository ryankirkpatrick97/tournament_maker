export interface Player {
    id: string;
    name: string;
    skillLevel: 'beginner' | 'intermediate' | 'advanced';
}

export interface Match {
    id: string;
    players: Player[];
    time: Date;
}

export interface Schedule {
    matches: Match[];
    date: Date;
}

export interface SchedulerConfig {
    maxPlayersPerMatch: number;
    minSkillLevelDifference: number;
}