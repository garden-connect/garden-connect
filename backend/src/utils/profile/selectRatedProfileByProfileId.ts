import {connect} from "../database.utils";
import {PartialProfile} from '../interfaces/Profile';
import {Rating} from '../interfaces/Rating';
import {RowDataPacket} from 'mysql2';

export async function selectRatedProfileByProfileId(profileId: string) : Promise<PartialProfile|null> {
  try {
    const mysqlConnection = await connect();
    const mysqlQuery : string = "SELECT BIN_TO_UUID(profileId) AS profileId, profileEmail, profileName, (SELECT AVG(ratingAmount) FROM rating) AS ratingAverage, (SELECT COUNT(*) FROM rating WHERE profile.profileId = rating.ratingProfileId1 AND ratingContent IS NOT NULL ) AS ratingCount FROM profile WHERE profileId = UUID_TO_BIN(:profileId)"
    const result: RowDataPacket[] = await mysqlConnection.execute(mysqlQuery, {profileId}) as RowDataPacket[]
    const rows: PartialProfile[] = result[0] as PartialProfile[]
    return rows.length !== 0 ? {...rows[0]} : null;
  } catch (error) {
    throw error
  }
}
