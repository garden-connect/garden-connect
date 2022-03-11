import {connect} from "../database.utils";
import {PartialProfile,} from '../interfaces/Profile';
import {RowDataPacket} from 'mysql2';

export async function selectPartialProfileByProfileId(profileId: string) : Promise<PartialProfile|null> {
  try {
    const mySqlConnection = await connect();
    const mySqlQuery : string = "SELECT BIN_TO_UUID(profileId) as profileId, profileAbout, profileEmail, profileName FROM profile WHERE profileId = UUID_TO_BIN(:profileId)"
    const result: RowDataPacket[] = await mySqlConnection.execute(mySqlQuery, {profileId}) as RowDataPacket[]
    await mySqlConnection.release()
    const rows: PartialProfile[] = result[0] as PartialProfile[]
    return rows.length !== 0 ? {...rows[0]} : null;
  } catch (error) {
    throw error
  }
}
