import {Post} from "../interfaces/Post";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function updatePost(post: Post) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "UPDATE post SET postActive = :postActive, postCategory = :postCategory, postContent = :postContent, postPicture = :postPicture) WHERE postId = UUID_TO_BIN(:postId)";

        const [result]= await mySqlConnection.execute(mySqlQuery, post) as [ResultSetHeader, RowDataPacket]
        return "Post updated successfully"
    } catch (error) {
        throw error
    }
}