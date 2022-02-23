import {connect} from "../database.utils";


export async function deletePostByPostId(postId: string) {

    try {
        const mySqlConnection = await connect();
        const mySqlDelete : string = 'DELETE FROM post WHERE postId = UUID_TO_BIN(:postId)';
        await mySqlConnection.execute(mySqlDelete, {postId})
        return 'Post successfully deleted'
    } catch(error) {
       throw error
    }
}