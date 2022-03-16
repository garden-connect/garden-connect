import {getAllPosts} from "frontend/src/store/posts"
import {updatePost} from "./post/updatePost";

const cron = require('node-cron');

cron.schedule('1 1 0 1 jan-dec mon', () => {
    getAllPosts(),
    updatePost()
});




