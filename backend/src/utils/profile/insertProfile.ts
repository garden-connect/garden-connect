import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function insertProfile(profile: Profile) : Promise<string>{
    try {
        const mySqlConnection = await connect();
        const query : string = 'INSERT INTO profile(profileId, profileAbout, profileActivationToken, profileEmail, profileHash, profileName ) VALUES (UUID_TO_BIN(UUID()), :profileAbout, :profileActivationToken, :profileEmail, :profileHash, :profileName)';
        await mySqlConnection.execute(query, profile);
        await mySqlConnection.release()
        return 'Profile Successfully Created'
    } catch (error) {
        //console.log("error error error")
        throw error
    }
}