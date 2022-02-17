import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function insertProfile(profile: Profile) : Promise<string>{
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO profile(profileId, profileActivationToken, profileEmail, profileHash, profileName ) VALUES (UUID_TO_BIN(UUID()) , :profileActivationToken, :profileEmail, :profileHash, :profileName)';
        await mysqlConnection.execute(query, profile);
        return 'Profile Successfully Created'
    } catch (error) {
        console.log("error error error")
        throw error
    }
}