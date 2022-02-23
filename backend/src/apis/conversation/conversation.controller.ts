import {Request, Response} from "express";
import{Conversation} from "../../utils/interfaces/Conversation";
import {Status} from "../../utils/interfaces/Status";
import {insertConversationByPostId} from "../../utils/conversation/insertConversationByPostId";
import {selectConversationsContainingProfileId} from "../../utils/conversation/selectConversationsContainingProfileId";
import {selectConversationsByPostId} from "../../utils/conversation/selectConversationsByPostId";
import {Profile} from "../../utils/interfaces/Profile";
import {selectPostsByPostProfileId} from "../../utils/post/selectPostsByPostProfileId";

export async function postConversationController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        const profile : Profile = request.session.profile as Profile
        const conversationProfileId : string = <string>profile.profileId
        const {conversationPostId, conversationContent} = request.body
        const conversation: Conversation = {
            conversationId: null,
            conversationProfileId,
            conversationPostId,
            conversationContent,
            conversationDate : null
        }
        const result = await insertConversationByPostId(conversation)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        return  response.json({
            status: 500,
            message: "Error creating conversation try again later.",
            data: null
        });
    }
}

export async function getConversationsByPostIdController(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const     {conversationPostId} = request.params
        const data  = await selectConversationsByPostId(conversationPostId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}

export async function getConversationsContainingProfileIdController(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const     {conversationProfileId} = request.params
        const data  = await selectConversationsContainingProfileId(conversationProfileId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}