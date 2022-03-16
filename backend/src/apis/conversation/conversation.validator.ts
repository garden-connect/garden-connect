import {Schema} from 'express-validator';

export const conversationValidator : Schema = {
    conversationReceiveProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid conversationReceiveProfileId'
        }
    },
    conversationSendProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid conversationSendProfileId'
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
