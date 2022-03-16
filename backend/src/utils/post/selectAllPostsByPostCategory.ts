import {Post} from "../interfaces/Post";
import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2"


const validator = require("validator")

export async function selectAllPostsByPostCategory(postCategory: string) : Promise<Post[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(postId) AS postId, BIN_TO_UUID (postProfileId) AS postProfileId, postActive, postCategory, postContent, postDate, postPicture, postTitle FROM post WHERE postCategory = :postCategory ORDER BY postDate DESC'
        const result = await mySqlConnection.execute(mySqlQuery, {postCategory}) as RowDataPacket[]
        await mySqlConnection.release()
        const posts: Post[] = []
        for (const row of result[0] as RowDataPacket[]){
            const {postId, postProfileId, postActive, postCategory, postContent, postDate, postPicture, postTitle} = row
            posts.push({postId, postProfileId, postActive, postCategory, postContent:validator.unescape(postContent), postDate, postPicture, postTitle:validator.unescape(postTitle)})
            console.log(validator.unescape)
        }
        return(posts)

    } catch (error) {
        console.error(error)
        throw error
    }
}