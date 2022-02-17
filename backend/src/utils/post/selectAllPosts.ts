import {Post} from "../interfaces/Post";
import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {Status} from "../interfaces/Status";
import {RowDataPacket,} from "mysql2"

export async function selectAllPosts() : Promise<Post[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(postId) AS postId, BIN_TO_UUID (postProfileId) AS postProfileId, postCategory, postContent, postDate, postPicture, (SELECT COUNT(*) FROM `like` WHERE tweet.tweetId = like.likeTweetId) AS likeCount FROM tweet INNER JOIN profile ON profile.profileId = tweet.tweetProfileId ORDER BY tweetDate DESC'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Tweet>
    } catch (error) {
        throw error
    }
}