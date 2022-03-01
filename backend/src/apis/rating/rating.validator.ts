import {Schema, CustomValidator} from 'express-validator';

export const ratingValidator : Schema = {
    ratingReviewedProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid ratingReviewedProfileId'
        }
    },
    ratingReviewingProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid ratingReviewingProfileId'
        }
    },
    ratingAmount: {
        isLength: {
            errorMessage: 'rating amount must be between 1 character',
            options: { max: 1 }
        }
    },
    ratingContent: {
        isLength: {
            errorMessage: 'a rating cannot be longer than 1000 characters',
            options: { max: 1000 }
        },
        trim: true,
        escape: true
    },
    ratingDate: {
        toDate: true
    }

};


