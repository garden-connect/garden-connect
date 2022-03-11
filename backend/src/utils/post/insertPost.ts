import {Post} from "../interfaces/Post";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertPost(post: Post) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery : string = "INSERT INTO post(postId, postProfileId, postActive, postCategory, postContent, postDate, postPicture, postTitle) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:postProfileId), :postActive, :postCategory, :postContent, NOW(), :postPicture, :postTitle)";
        const [result]= await mySqlConnection.execute(mySqlQuery, post) as [ResultSetHeader, RowDataPacket]
        await mySqlConnection.release()
        return "Post created successfully"
    } catch (error) {
        console.log("error: " + error)
        throw error


    }
}