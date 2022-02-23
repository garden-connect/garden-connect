import {Schema} from 'express-validator';

export const conversationValidator : Schema = {
    conversationProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid conversationProfileId'
        }
    },
    conversationPostId: {
        isUUID: {
            errorMessage: 'please provide a valid conversationPostId'
        }
    },

   conversationContent: {
        isLength: {
            errorMessage: 'a post cannot be longer than 2000 characters',
            options: { max: 2000 }
        },
        trim: true,
        escape: true
    },
    conversationDate: {
        toDate: true
    }

};
