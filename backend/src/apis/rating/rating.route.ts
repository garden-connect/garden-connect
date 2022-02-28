
import { Router } from 'express';
import {
    getRatingsByReviewedProfileIdController,
    postRating,
    putRatingController
} from "./rating.controller";
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { ratingValidator} from './rating.validator';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from 'express-validator';
import {checkSchema} from 'express-validator';



const router = Router();

router.route("/:ratingReviewedProfileId")
    .get(  asyncValidatorController([
        check("postId", "please provide a valid postId").isUUID()
    ]), getRatingsByReviewedProfileIdController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(ratingValidator)), postRating)
    .put(isLoggedIn, asyncValidatorController(checkSchema(ratingValidator)), putRatingController)

export default router;