export interface Rating {
    ratingReviewedProfileId: string|null;
    ratingReviewingProfileId: string|null;
    ratingAmount: string|null;
    ratingContent: string;
    ratingDate: Date|null;
}