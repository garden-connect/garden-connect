import { Router } from 'express';
import {
    postConversationController,
    getConversationsByPostIdController,
    getConversationsContainingProfileIdController
} from "./conversation.controller";
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { conversationValidator} from "./conversation.validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from 'express-validator';
import {checkSchema} from 'express-validator';



const router = Router();

router.route("/:conversationPostId")
    .get(  asyncValidatorController([
        check("conversationPostId", "please provide a valid conversationPostId").isUUID()
    ]), getConversationsByPostIdController)


router.route("/conversationProfileId/:conversationProfileId")
    .get(  asyncValidatorController([
        check("conversationProfileId", "please provide a valid conversationProfileId").isUUID()
    ]), getConversationsContainingProfileIdController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/')
    .post(isLoggedIn, asyncValidatorController(checkSchema(conversationValidator)), postConversationController)

export default router;