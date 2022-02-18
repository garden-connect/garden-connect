import {Post} from "../interfaces/Post";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectPostsByPostProfileId(postProfileId: string) : Promise<Post[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(postId) AS postId, BIN_TO_UUID (postProfileId) AS postProfileId, postActive, postCategory, postContent, postDate, postPicture, FROM post WHERE postProfileId = UUID_TO_BIN(:postProfileId) ORDER BY postDate DESC'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {postProfileId})
        return result[0] as Post[]
    } catch (error) {
        throw error
    }
}