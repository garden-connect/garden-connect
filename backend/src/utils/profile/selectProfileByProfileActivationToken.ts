import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {RowDataPacket} from 'mysql2';


export async function selectProfileByProfileActivationToken(profileActivationToken: string): Promise<Profile|null> {
    try {
        console.log(profileActivationToken)
        const mySqlConnection = await connect();
        const mySqlQuery: string = "SELECT BIN_TO_UUID(profileId) as profileId, profileAbout, profileEmail, profileName FROM profile WHERE profileActivationToken = :profileActivationToken"
        const result = await mySqlConnection.execute(mySqlQuery ,{profileActivationToken}) as RowDataPacket[]
        await mySqlConnection.release()
        const rows: Profile[]  = result[0] as Profile[]
        return rows.length === 1 ? {...rows[0]} : null;
    }  catch (error) {
        throw error
    }
}