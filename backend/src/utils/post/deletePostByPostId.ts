import {connect} from "../database.utils";
import {Post} from "../interfaces/Post";

export async function deletePostByPostId(postId: string) {
   // console.log(postId)
    try {
        const mySqlConnection = await connect();
        const mySqlDelete : string = 'DELETE FROM post WHERE postId = UUID_TO_BIN(:postId)';
        await mySqlConnection.execute(mySqlDelete, {postId})
        return 'Post successfully deleted'
    } catch(error) {
        console.log("sql error is" + error)
    //    throw error
    }
}