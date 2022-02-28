import {Rating} from "../interfaces/Ratings";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectRatingsByReviewedProfileId(ratingReviewedProfileId: string) : Promise<Rating[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(ratingReviewedProfileId) AS ratingReviewedProfileId, BIN_TO_UUID (ratingReviewingProfileId) AS ratingReviewingProfileId, ratingAmount, ratingContent, ratingDate FROM rating WHERE ratingReviewedProfileId = UUID_TO_BIN(:ratingReviewedProfileId) ORDER BY ratingDate DESC'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {ratingReviewedProfileId})
        return result[0] as Rating[]
    } catch (error) {
        throw error
    }
}