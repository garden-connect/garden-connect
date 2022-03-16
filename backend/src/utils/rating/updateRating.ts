import {Rating} from "../interfaces/Ratings";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function updateRating(rating: Rating) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "UPDATE rating SET ratingAmount = :ratingAmount, ratingContent = :ratingContent, ratingDate = NOW() WHERE ratingReviewingProfileId = UUID_TO_BIN(:ratingReviewingProfileId) AND ratingReviewedProfileId = UUID_TO_BIN(:ratingReviewedProfileId)";
        const [result]= await mySqlConnection.execute(mySqlQuery, rating) as [ResultSetHeader, RowDataPacket]
        await mySqlConnection.release()
        return "Rating updated successfully"
    } catch (error) {
        throw error
    }
}