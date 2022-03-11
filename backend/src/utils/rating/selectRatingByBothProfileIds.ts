import {Rating} from "../interfaces/Ratings";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectRatingByBothProfileIds(rating: Rating) : Promise<Rating|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(ratingReviewedProfileId) AS ratingReviewedProfileId, BIN_TO_UUID (ratingReviewingProfileId) AS ratingReviewingProfileId, ratingAmount, ratingContent, ratingDate FROM rating WHERE ratingReviewingProfileId = UUID_TO_BIN(:ratingReviewingProfileId) AND ratingReviewedProfileId = UUID_TO_BIN(:ratingReviewedProfileId)'
        const result : RowDataPacket[]= await mySqlConnection.execute(mySqlSelectQuery, rating) as RowDataPacket[]
        await mySqlConnection.release()
        const rows: Rating[] = result[0] as Rating[]
        return rows.length !== 0 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}