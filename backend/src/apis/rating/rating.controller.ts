import {Request, Response, NextFunction} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Rating} from '../../utils/interfaces/Ratings';
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {insertRating} from "../../utils/rating/insertRating"
import {selectRatingsByReviewedProfileId} from "../../utils/rating/selectRatingsByReviewedProfile";
import {selectRatingByBothProfileIds} from "../../utils/rating/selectRatingByBothProfileIds";
import {updateRating} from "../../utils/rating/updateRating";



export async function getRatingsByReviewedProfileIdController(request : Request, response: Response): Promise<Response<Status>>{
    try {
        const     {ratingReviewedProfileId} = request.params
        const data  = await selectRatingsByReviewedProfileId(ratingReviewedProfileId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}


export async function postRating(request: Request, response: Response) : Promise<Response<Status>> {
    try {
        const {ratingReviewedProfileId} = request.params
        const {ratingAmount, ratingContent} = request.body;
        const profile : Profile = request.session.profile as Profile
        const ratingReviewingProfileId : string = <string>profile.profileId
        console.log(ratingReviewingProfileId)
        const rating: Rating = {
            ratingReviewedProfileId,
            ratingReviewingProfileId,
            ratingAmount,
            ratingContent,
            ratingDate: null
        }
        const result = await insertRating(rating)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        return  response.json({
            status: 500,
            message: "Error creating rating try again later.",
            data: null
        });
    }
}


export async function putRatingController(request: Request, response: Response) : Promise<Response>{
    try {
        const {ratingReviewedProfileId} = request.params
        const {ratingReviewingProfileId, ratingAmount, ratingContent} = request.body
        const profile : Profile = request.session.profile as Profile
        const ratingReviewingProfileIdFromSession: string = <string>profile.profileId
        const rating: Rating = {
            ratingReviewedProfileId,
            ratingReviewingProfileId,
            ratingAmount,
            ratingContent,
            ratingDate: null
        }
        const performRatingUpdate = async (rating: Rating) : Promise<Response> => {
            const previousRating: Rating = await selectRatingByBothProfileIds(rating) as Rating
            const newRating: Rating = {...previousRating, ...rating}
            await updateRating(newRating)
            return response.json({status: 200, data: null, message: "Rating successfully updated"})
        }

        const updateRatingFailed = (message: string) : Response => {
            return response.json({status: 400, data: null, message})
        }

        return ratingReviewingProfileId === ratingReviewingProfileIdFromSession
            ? await performRatingUpdate(rating)
            : updateRatingFailed("you are not allowed to perform this action")
    } catch (error: any) {
        return response.json( {status:400, data: null, message: error.message})
    }
}



