export interface Player {
    id: string;
    name: string;
    skillLevel: 'beginner' | 'intermediate' | 'advanced';
}

export interface Match {
    id: string;
    players: Player[];
    time: string;
}

export interface Schedule {
    matches: Match[];
    date: string;
}