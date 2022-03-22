import {Conversation} from "../interfaces/Conversation";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

const validator = require("validator")

export async function selectConversationsByPostId(conversationPostId: string) : Promise<Conversation[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(conversationId) AS conversationId, BIN_TO_UUID (conversationReceiveProfileId) AS conversationReceiveProfileId, BIN_TO_UUID (conversationSendProfileId) AS conversationSendProfileId, BIN_TO_UUID(conversationPostId) AS conversationPostId, conversationContent, conversationDate FROM conversation WHERE conversationPostId = UUID_TO_BIN(:conversationPostId) ORDER BY conversationDate'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {conversationPostId})
        await mySqlConnection.release()
        const conversations: Conversation[] = []
        for (const row of result[0] as RowDataPacket[]) {
            const {conversationId, conversationReceiveProfileId, conversationSendProfileId, conversationPostId, conversationContent, conversationDate} = row
            conversations.push({conversationId, conversationReceiveProfileId, conversationSendProfileId, conversationPostId, conversationContent:validator.unescape(conversationContent), conversationDate})
        }
        return(conversations)
    } catch (error) {
        throw error
    }
}