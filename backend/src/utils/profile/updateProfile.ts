
import {Profile} from "../interfaces/Profile";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function updateProfile(profile: Profile): Promise<string>  {
    try {
        const mySqlConnection = await connect();
        const query : string = 'UPDATE profile SET profileAbout = :profileAbout, profileActivationToken = :profileActivationToken, profileEmail = :profileEmail,  profileName = :profileName WHERE profileId = UUID_TO_BIN(:profileId)';
        await mySqlConnection.execute(query, profile)
        await mySqlConnection.release()
        return 'Profile successfully updated'
    } catch (error) {
        throw error
    }
}