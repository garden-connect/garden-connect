import {Conversation} from "../interfaces/Conversation";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertConversationByPostId(conversation: Conversation) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery : string = "INSERT INTO conversation(conversationId, conversationPostId, conversationProfileId, conversationContent, conversationDate) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:conversationPostId), UUID_TO_BIN(:conversationProfileId), :conversationContent, NOW())";
        const [result]= await mySqlConnection.execute(mySqlQuery, conversation) as [ResultSetHeader, RowDataPacket]
        return "Conversation created successfully"
    } catch (error) {
        console.log('sql error: ' + error)
        throw error
    }
}