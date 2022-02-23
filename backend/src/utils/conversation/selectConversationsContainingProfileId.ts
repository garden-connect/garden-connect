import {Conversation} from "../interfaces/Conversation";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectConversationsContainingProfileId(conversationProfileId: string) : Promise<Conversation[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(conversationId) AS conversationId, BIN_TO_UUID (conversationProfileId) AS conversationProfileId, conversationContent, conversationDate FROM conversation WHERE conversationPostId = ANY (SELECT conversationPostId FROM conversation WHERE conversationProfileId = UUID_TO_BIN(:conversationProfileId))'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {conversationProfileId})
        return result[0] as Conversation[]
    } catch (error) {
        throw error
    }
}