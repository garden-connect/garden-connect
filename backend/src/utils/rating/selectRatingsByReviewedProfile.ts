import {Rating} from "../interfaces/Ratings";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

const validator = require("validator")

export async function selectRatingsByReviewedProfileId(ratingReviewedProfileId: string) : Promise<Rating[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(ratingReviewedProfileId) AS ratingReviewedProfileId, BIN_TO_UUID (ratingReviewingProfileId) AS ratingReviewingProfileId, ratingAmount, ratingContent, ratingDate FROM rating WHERE ratingReviewedProfileId = UUID_TO_BIN(:ratingReviewedProfileId) ORDER BY ratingDate DESC'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {ratingReviewedProfileId})
        await mySqlConnection.release()
        const ratings: Rating[] = []
        for (const row of result[0] as RowDataPacket[]) {
            const {ratingReviewedProfileId, ratingReviewingProfileId, ratingAmount, ratingContent, ratingDate} = row
            ratings.push({ratingReviewedProfileId, ratingReviewingProfileId, ratingAmount, ratingContent:validator.unescape(ratingContent), ratingDate})
        }
        return(ratings)
    } catch (error) {
        console.log("Error is" + error)
        throw error
    }
}