import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.github.com',
})

export async function searchIssues(user: string, repo: string) {
    try {
        const response = await api.get(`/repos/${user}/${repo}/issues`);
        return response.data;
    } catch (error) {
        console.log("Erro: ", error);
        return [];
    }
}
