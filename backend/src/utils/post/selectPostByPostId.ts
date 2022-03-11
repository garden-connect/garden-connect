import {Post} from "../interfaces/Post";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectPostByPostId(postId: string) : Promise<Post|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(postId) AS postId, BIN_TO_UUID (postProfileId) AS postProfileId, postActive, postCategory,postContent, postDate, postPicture, postTitle from post WHERE postId = UUID_TO_BIN(:postId)"
        const result = await mySqlConnection.execute(mySqlQuery, {postId}) as RowDataPacket[]
        await mySqlConnection.release()
        const posts : Array<Post> = result[0] as Array<Post>
        return posts.length === 1 ? {...posts[0]} : null;
    } catch (error) {
        throw error
    }
}