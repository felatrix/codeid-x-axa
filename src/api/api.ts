import axios, { AxiosResponse } from 'axios';
import { UserInterface } from '@/types/api/user';
import { PostInterface } from '@/types/api/post';
import { AlbumInterface } from '@/types/api/album';
import { CommentInterface } from '@/types/api/comment';
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
    async getUserPosts(userId:number): Promise<any[]> {
        try {
            const response: AxiosResponse<PostInterface[]> = await axios.get(`${this.baseUrl}/posts?userId=${userId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    }
    async getUserAlbum(userId:number): Promise<any[]> {
        try {
            const response: AxiosResponse<AlbumInterface[]> = await axios.get(`${this.baseUrl}/albums?userId=${userId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }
    async getPostComments(postId:number): Promise<any[]> {
        try {
            const response: AxiosResponse<CommentInterface[]> = await axios.get(`${this.baseUrl}/comments?postId=${postId}`);
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