import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {RowDataPacket} from 'mysql2';

export async function selectWholeProfileByProfileId(profileId: string): Promise<Profile|null>  {
  try {
    const mySqlConnection = await connect();
    const mySqlQuery: string = 'SELECT BIN_TO_UUID(profileId) as profileId, profileAbout, profileActivationToken, profileEmail, profileHash,profileName FROM profile WHERE profileId = UUID_TO_BIN(:profileId)'
    const result = await mySqlConnection.execute(mySqlQuery, {profileId}) as RowDataPacket[]
    await mySqlConnection.release()
    const rows: Profile[]  = result[0] as Profile[]
    return rows.length === 1 ? {...rows[0]} : null;
  } catch (error) {
    throw error
  }
}
