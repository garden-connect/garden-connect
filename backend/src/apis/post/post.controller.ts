import {Request, Response, NextFunction} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Post} from '../../utils/interfaces/Post';
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {insertTweet} from "../../utils/tweet/insertTweet"
import {selectAllTweets} from "../../utils/tweet/selectAllTweets";
import {selectTweetsByTweetProfileId} from "../../utils/tweet/selectTweetsByTweetProfileId";
import {selectTweetByTweetId} from '../../utils/tweet/selectTweetByTweetId';

export async function getAllPostsController(request: Request, response: Response): Promise<Response<Status>> {

    try {
        const data = await selectAllPosts()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}

export async function getPostsByPostProfileIdController(request : Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    try {
        const     {postProfileId} = request.params
        const data  = await selectPostsByPostProfileId(postProfileId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}

export async function getPostByPostIdController(request : Request, response: Response, nextFunction: NextFunction) : Promise<Response<Status>>{
    try {
        const     {PostId} = request.params
        const data  = await selectTweetByTweetId(PostId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}

export async function postTweet(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {tweetContent} = request.body;
        const profile : Profile = request.session.profile as Profile
        const tweetProfileId : string = <string>profile.profileId

        const post: Post = {
            postId: null,
            postProfileId,
            postCategory,
            postContent,
            postDate: null
        }
        const result = await insertTweet(tweet)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        return  response.json({
            status: 500,
            message: "Error Creating tweet try again later.",
            data: null
        });
    }
}



// export async function deleteTweet(request: Request, response: Response) {
// 	try {
// 		const {tweetId} = request.body;
// 		const result = await deleteTweet(tweetId)
// 		const status: Status = {status: 200, data, message: null}
// 		return response.json(status)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }