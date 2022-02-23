
import { Router } from 'express';
import {
    getAllPostsController,
    getPostByPostIdController,
    getPostsByPostProfileIdController,
    postPost,
    putPostController,
    getPostByPostCategoryController,
    deletePost
} from './post.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { postValidator, categoryValidatorController } from './post.validator';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from 'express-validator';
import {checkSchema} from 'express-validator';



const router = Router();

router.route("/:postId")
    .get(  asyncValidatorController([
    check("postId", "please provide a valid postId").isUUID()
]), getPostByPostIdController)
    .put(isLoggedIn, asyncValidatorController(checkSchema(postValidator)), putPostController)
    .delete(isLoggedIn, asyncValidatorController([
        check("postId", "please provide a valid postId").isUUID()
    ]), deletePost);


router.route("/postProfileId/:postProfileId")
    .get(  asyncValidatorController([
    check("postProfileId", "please provide a valid postProfileId").isUUID()
]), getPostsByPostProfileIdController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/')
    .get( getAllPostsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(postValidator)), postPost)


//check scheme and validator?
router.route("/postCategory/:postCategory")
    .get(
        asyncValidatorController( [
            check("postCategory", "please provide a valid category").custom(categoryValidatorController)
        ])
        , getPostByPostCategoryController
    )



export default router;