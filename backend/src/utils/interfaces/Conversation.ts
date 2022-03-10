export interface Conversation {
    conversationId: string|null;
    conversationPostId: string;
    conversationReceiveProfileId: string;
    conversationSendProfileId: string;
    conversationContent: string;
    conversationDate: Date|null;
}