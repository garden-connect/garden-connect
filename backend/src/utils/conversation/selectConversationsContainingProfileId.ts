import {Conversation} from "../interfaces/Conversation";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectConversationsContainingProfileId(conversationProfileId: string) : Promise<Conversation[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(conversationId) AS conversationId, BIN_TO_UUID (conversationPostId) AS conversationPostId, BIN_TO_UUID (conversationReceiveProfileId) AS conversationReceiveProfileId,  BIN_TO_UUID (conversationSendProfileId) AS conversationSendProfileId, conversationContent, conversationDate FROM conversation WHERE conversationReceiveProfileId  = UUID_TO_BIN(:conversationProfileId) OR conversationSendProfileId = UUID_TO_BIN(:conversationProfileId)'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {conversationProfileId})
        return result[0] as Conversation[]
    } catch (error) {
        throw error
    }
}