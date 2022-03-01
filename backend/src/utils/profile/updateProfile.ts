
import {Profile} from "../interfaces/Profile";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function updateProfile(profile: Profile): Promise<string>  {
    try {
        const mysqlConnection = await connect();
        const query : string = 'UPDATE profile SET profileAbout = :profileAbout, profileActivationToken = :profileActivationToken, profileEmail = :profileEmail,  profileName = :profileName WHERE profileId = UUID_TO_BIN(:profileId)';
        await mysqlConnection.execute(query, profile)
        return 'Profile successfully updated'
    } catch (error) {
        throw error
    }
}