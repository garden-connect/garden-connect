export interface Post {
    postId: string|null;
    postProfileId: string;
    postActive: string|null;
    postCategory: string;
    postContent: string;
    postDate: Date|null;
    postPicture: string;
}