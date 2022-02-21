import {Request, Response, NextFunction} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Post} from '../../utils/interfaces/Post';
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {insertPost} from "../../utils/post/insertPost"
import {selectAllPosts} from "../../utils/post/selectAllPosts";
import {selectPostsByPostProfileId} from "../../utils/post/selectPostsByPostProfileId";
import {selectPostByPostId} from '../../utils/post/selectPostByPostId';
import {deletePostByPostId} from "../../utils/post/deletePostByPostId";
import {selectAllPostsByPostCategory} from "../../utils/post/selectAllPostsByPostCategory";
import {updatePost} from "../../utils/post/updatePost";

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

export async function getPostsByPostProfileIdController(request : Request, response: Response): Promise<Response<Status>>{
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

export async function getPostByPostIdController(request : Request, response: Response) : Promise<Response<Status>>{
    try {
        const     {PostId} = request.params
        const data  = await selectPostByPostId(PostId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}

export async function postPost(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {postCategory, postContent, postPicture} = request.body;
        const profile : Profile = request.session.profile as Profile
        const postProfileId : string = <string>profile.profileId

        const post: Post = {
            postId: null,
            postProfileId,
            postActive: null,
            postCategory,
            postContent,
            postDate: null,
            postPicture
        }
        const result = await insertPost(post)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        return  response.json({
            status: 500,
            message: "Error creating post try again later.",
            data: null
        });
    }
}



 export async function deletePost(request: Request, response: Response) {
 	try {
         const {PostId} = request.body;
		const data = await deletePostByPostId(PostId)
		const status: Status = {status: 200, data, message: null}
		return response.json(status)
	} catch (error) {
		console.log(error)
 	}
 }

export async function putPostController(request: Request, response: Response) : Promise<Response>{
    try {
        const {postId} = request.params
        const {postProfileId} = request.params
        const {postActive,  postCategory, postContent, postDate, postPicture} = request.body
        const profile = <Profile>request.session.profile
        const postProfileIdFromSession = <string>profile.profileId

        const performPostUpdate = async (post: Post) : Promise<Response> => {
            const previousPost: Post = await selectPostByPostId(<string>post.postId) as Post
            const newPost: Post = {...previousPost, ...post}
            await updatePost(newPost)
            return response.json({status: 200, data: null, message: "Post successfully updated"})
        }

        const updatePostFailed = (message: string) : Response => {
            return response.json({status: 400, data: null, message})
        }

        return postProfileId === postProfileIdFromSession
            ? performPostUpdate({postId, postProfileId, postActive, postCategory, postContent, postDate, postPicture})
            : updatePostFailed("you are not allowed to perform this action")
    } catch (error: any) {
        return response.json( {status:400, data: null, message: error.message})
    }
}

export async function getPostByPostCategoryController(request : Request, response: Response) : Promise<Response<Status>>{
    try {
        const     {PostCategory} = request.params
        const data  = await selectAllPostsByPostCategory(PostCategory)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}

