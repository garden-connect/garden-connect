import {Request, Response} from "express";
import {PartialProfile, Profile} from "../../utils/interfaces/Profile";
import {selectPartialProfileByProfileId} from "../../utils/profile/selectPartialProfileByProfileId";
import {Status} from "../../utils/interfaces/Status";
import {selectWholeProfileByProfileId} from "../../utils/profile/selectWholeProfileByProfileId";
import {updateProfile} from "../../utils/profile/updateProfile";

export async function putProfileController(request: Request, response: Response) : Promise<Response>{
  try {
    const {profileId} = request.params
    const {profileName} = request.body
    // const profileAbout = request.body.profileAbout ?? null;
    const profileAbout = request.body.profileAbout ?? "";
    const profile = <Profile>request.session.profile
    const profileIdFromSession = <string>profile.profileId
    console.log(profile.profileId)
    const profileEmail = <string>profile.profileEmail
    console.log(profileEmail)

    const preformUpdate = async (partialProfile: PartialProfile) : Promise<Response> => {
      const previousProfile: Profile = await selectWholeProfileByProfileId(<string>partialProfile.profileId) as Profile
      const newProfile: Profile = {...previousProfile, ...partialProfile}
      await updateProfile(newProfile)
      return response.json({status: 200, data: null, message: "Profile successfully updated"})
    }

    const updateFailed = (message: string) : Response => {
      return response.json({status: 400, data: null, message})
    }

    return profileId === profileIdFromSession
      ? preformUpdate({profileId, profileAbout, profileEmail, profileName})
      : updateFailed("you are not allowed to preform this action")
  } catch (error: any) {
    return response.json( {status:400, data: null, message: error.message})
  }
}

export async function getProfileByProfileId(request: Request, response: Response) : Promise<Response> {
  try {
    const {profileId} = request.params;
    const mySqlResult = await selectPartialProfileByProfileId(profileId);
    const data = mySqlResult ?? null
    const status: Status = {status: 200, data, message: null}
    return response.json(status)

  } catch (error: any) {
    return(response.json({status: 400, data: null, message: error.message}))

  }
}
