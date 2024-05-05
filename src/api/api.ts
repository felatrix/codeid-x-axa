import axios, { AxiosResponse } from 'axios';
import { UserInterface } from '@/types/api/user';
import { PostInterface } from '@/types/api/post';
import { AlbumInterface } from '@/types/api/album';
import { CommentInterface } from '@/types/api/comment';
import { PhotoInterface } from '@/types/api/photo';
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
    async getUserPosts(userId: number): Promise<any[]> {
        try {
            const response: AxiosResponse<PostInterface[]> = await axios.get(`${this.baseUrl}/posts?userId=${userId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    }
    async getUserAlbum(userId: number): Promise<any[]> {
        try {
            const response: AxiosResponse<AlbumInterface[]> = await axios.get(`${this.baseUrl}/albums?userId=${userId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }
    async getAlbumPhoto(albumId: number): Promise<any[]> {
        try {
            const response: AxiosResponse<PhotoInterface[]> = await axios.get(`${this.baseUrl}/photos?albumId=${albumId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }
    async getPostComments(postId: number): Promise<any[]> {
        try {
            const response: AxiosResponse<CommentInterface[]> = await axios.get(`${this.baseUrl}/comments?postId=${postId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }
    async createPost(postData: { title: string, body: string, userId: number }): Promise<any> {
        try {
            const response: AxiosResponse<PostInterface> = await axios.post(`${this.baseUrl}/posts`, postData);
            return response.data;
        } catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    }
    async updatePost(postId: number, postData: { title: string, body: string, userId: number }): Promise<any> {
        try {
            const response: AxiosResponse<PostInterface> = await axios.put(`${this.baseUrl}/posts/${postId}`, postData);
            return response.data;
        } catch (error) {
            console.error('Error updating post:', error);
            throw error;
        }
    }
    async deletePost(postId: number): Promise<void> {
        try {
            await axios.delete(`${this.baseUrl}/posts/${postId}`);
        } catch (error) {
            console.error('Error deleting post:', error);
            throw error;
        }
    }
    // Add more methods for other API endpoints if needed
}

// Example usage
const api = new ApiClient('https://jsonplaceholder.typicode.com');

export { api }