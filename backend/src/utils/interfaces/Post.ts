export interface Post {
    postId: string|null;
    postProfileId: string;
    postCategory: string;
    postContent: string;
    postDate: Date|null;
    postPicture: string;
}