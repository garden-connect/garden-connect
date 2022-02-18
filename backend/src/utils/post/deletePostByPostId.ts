import {connect} from "../database.utils";
import {Post} from "../interfaces/Post";

export async function deletePostByPostId(post: Post) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM `post` WHERE postId = UUID_TO_BIN(:postId)'
        const [result] = await mySqlConnection.execute(mySqlDelete, post)
        return "Post successfully deleted"
    } catch(error) {
        throw error
    }
}