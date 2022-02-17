import {Post} from "../interfaces/Post";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertPost(post: Post) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO post(postId, postProfileId, postCategory, postContent, postDate, postPicture ) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:postProfileId), :postCategory, :postContent, NOW(), :postPicture)";

        const [result]= await mySqlConnection.execute(mySqlQuery, post) as [ResultSetHeader, RowDataPacket]
        return "Post created successfully"
    } catch (error) {
        throw error
    }
}