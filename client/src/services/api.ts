import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const fetchSchedules = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/schedules`);
        return response.data;
    } catch (error) {
        console.error('Error fetching schedules:', error);
        throw error;
    }
};

export const submitPlayers = async (playerData: FormData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/players`, playerData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error submitting player data:', error);
        throw error;
    }
};