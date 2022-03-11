import {Rating} from "../interfaces/Ratings";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertRating(rating: Rating) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery : string = "INSERT INTO rating(ratingReviewedProfileId, ratingReviewingProfileId, ratingAmount, ratingContent, ratingDate) VALUES(UUID_TO_BIN(:ratingReviewedProfileId), UUID_TO_BIN(:ratingReviewingProfileId), :ratingAmount, :ratingContent, NOW())";
        const [result]= await mySqlConnection.execute(mySqlQuery, rating) as [ResultSetHeader, RowDataPacket]
        await mySqlConnection.release()
        return "Rating created successfully"
    } catch (error) {
        console.log("error: " + error)
        throw error
    }
}