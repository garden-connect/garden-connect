import {Conversation} from "../interfaces/Conversation";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectConversationsByPostId(conversationPostId: string) : Promise<Conversation[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(conversationId) AS conversationId, BIN_TO_UUID (conversationReceiveProfileId) AS conversationReceiveProfileId, BIN_TO_UUID (conversationSendProfileId) AS conversationSendProfileId, conversationContent, conversationDate FROM conversation WHERE conversationPostId = UUID_TO_BIN(:conversationPostId) ORDER BY conversationDate'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {conversationPostId})
        return result[0] as Conversation[]
    } catch (error) {
        throw error
    }
}