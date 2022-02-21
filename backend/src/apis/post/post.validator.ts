import {Schema} from 'express-validator';

export const postValidator : Schema = {
    postProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid PostProfileId'
        }
    },
    postContent: {
        isLength: {
            errorMessage: 'a post cannot be longer than 2000 characters',
            options: { max: 2000 }
        },
        trim: true,
        escape: true
    },
    postDate: {
        toDate: true
    }

};