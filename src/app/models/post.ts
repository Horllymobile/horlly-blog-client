export interface Post {
    id: number;
    title: string;
    article: string;
    date: string;
    author: string;
    category: string;
    comments: Array<object>
}