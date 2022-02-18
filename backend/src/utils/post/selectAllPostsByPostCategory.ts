import {Post} from "../interfaces/Post";
import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {Status} from "../interfaces/Status";
import {RowDataPacket,} from "mysql2"

export async function selectAllPostsByPostCategory(postCategory: string) : Promise<Post[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(postId) AS postId, BIN_TO_UUID (postProfileId) AS postProfileId, postActive, postCategory, postContent, postDate, postPicture FROM post WHERE postCategory = :postCategory ORDER BY postDate DESC'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Post>
    } catch (error) {
        throw error
    }
}