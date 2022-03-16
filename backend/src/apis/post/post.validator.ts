import {Schema, CustomValidator} from 'express-validator';

export const postValidator : Schema = {
    postProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid PostProfileId'
        }
    },
    postActive: {
        isInt: {
            errorMessage: 'active must be integer'
        }
    },

    // postCategory: {
    //     isString: {
    //         errorMessage: 'must be a valid category'
    //     }
    // },

    postContent: {
        isLength: {
            errorMessage: 'a post cannot be longer than 512 characters',
            options: { max: 512 }
        },
        trim: true,
        escape: true
    },
    postTitle: {
        isLength: {
            errorMessage: 'a title cannot be longer than 50 characters',
            options: {max: 50}
        },
        trim: true,
        escape: true
    },
    postDate: {
        toDate: true
    }

};

export const categoryValidatorController: CustomValidator = (value:string) => {
    // console.log(value)
    if (value === "harvest"|| value === "hands") {
     return true

    }
    throw new Error ("This is not a category");
}
