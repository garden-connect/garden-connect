import {Schema} from "express-validator";

export const profileValidator : Schema = {
  profileId: {
    isUUID: {
      errorMessage: 'please provide a valid ProfileId'
    }
  },
  profileEmail: {
    isEmail: {
      errorMessage: 'Please provide a valid email'
    },
    trim: true
  },
  profileName: {
    escape: true,
    trim: true,
    isLength: {
      errorMessage: 'profileName must be no greater than thirty two characters',
      options: {min:1, max: 32 }
    }
  },
};