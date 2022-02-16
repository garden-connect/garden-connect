import {Schema} from 'express-validator';

export const signupValidator: Schema= {
    profileName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profile name must be no more than thirty two characters',
            options: {min:1, max: 32 }
        }
    },

    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        // Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
        // normalizeEmail: true,
        trim: true
    },
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },
    profilePasswordConfirm: {
        isLength: {
            errorMessage: 'confirm password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },

};