import {fetchAllPosts, getAllPosts} from "frontend/src/store/posts"
import {updatePost} from "./post/updatePost";
import {Post} from "./interfaces/Post";
import {connect} from "./database.utils";
import {ResultSetHeader, RowDataPacket} from "mysql2";

const cron = require('node-cron');

cron.schedule('1 1 0 * jan-dec 0-7', () => {
    console.log("hello")
});




