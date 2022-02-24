export interface Post {
    ratingReviewingProfileId: string|null;
    ratingReviewedProfileId: string|null;
    ratingAmount: string|null;
    ratingContent: string;
    ratingDate: Date|null;
}