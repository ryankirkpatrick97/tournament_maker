export interface Player {
    id: string;
    name: string;
    skillLevel: 'beginner' | 'intermediate' | 'advanced';
    availability: boolean;
}