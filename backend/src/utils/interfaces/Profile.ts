export interface Profile {
    profileId : string|null,
    profileActivationToken: string|null,
    profileEmail: string,
    profileHash: string,
    profileName: string
}

export interface PartialProfile {
    profileId : string|null,
    profileEmail : string,
    profileName : string
}
