export interface Conversation {
    conversationId: string|null;
    conversationPostId: string;
    conversationProfileId: string;
    conversationContent: string;
    conversationDate: Date|null;
}