import axios, { AxiosResponse } from 'axios';
import { UserInterface } from '@/types/api/user';

class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getUsers(): Promise<any[]> {
        try {
            const response: AxiosResponse<UserInterface[]> = await axios.get(`${this.baseUrl}/users`);
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }

    // Add more methods for other API endpoints if needed
}

// Example usage
const api = new ApiClient('https://jsonplaceholder.typicode.com');

export { api }