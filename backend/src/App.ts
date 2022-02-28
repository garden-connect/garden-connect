import express, { Application } from 'express'
import morgan from 'morgan'
import signUpRoute from "./apis/sign-up/sign-up.route";
import helmet from "helmet";
// Routes
import ratingRoute from "./apis/rating/rating.route"
import { indexRoute } from './apis/index.route'
import {SignInRouter} from "./apis/sign-in/sign-in.route";
import {SignOutRoute} from "./apis/sign-out/sign-out.route";

const session = require("express-session");
const MemoryStore = require('memorystore')(session);
import {ProfileRoute} from "./apis/profile/profile.route";
import postRoute from "./apis/post/post.route";
import conversationRoute from "./apis/conversation/conversation.route";
import {ImageUploadRouter} from "./apis/image-upload/image-upload.route";


// The following class creates the app and instantiates the server
export class App {
  app: Application;

  constructor (
    private port?: number | string
  ) {
    this.app = express()
    this.settings()
    this.middlewares()
    this.routes()
  }

  // private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
  public settings () : void {
    this.app.set('port', this.port || process.env.PORT || 4200)
  }

  // private method to setting up the middleware to handle json responses, one for dev and one for prod
  private middlewares () :void {

    const sessionConfig  =  {
      store: new MemoryStore({
        checkPeriod: 100800
      }),
      secret:"secret",
      saveUninitialized: true,
      resave: true,
      maxAge: "3h"
    };
    this.app.use(morgan('dev'))
    this.app.use(helmet());
    this.app.use(express.json())
    this.app.use(session(sessionConfig));

  }

  // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
  private routes () :void {
    // TODO add "/apis"
    this.app.use('/apis', indexRoute)
    this.app.use('/apis/sign-up', signUpRoute)
    this.app.use('/apis/sign-out', SignOutRoute)
    this.app.use('/apis/sign-in', SignInRouter)
    this.app.use('/apis/profile', ProfileRoute)
    this.app.use('/apis/post', postRoute)
    this.app.use('/apis/conversation', conversationRoute)
    this.app.use('/apis/rating', ratingRoute)
    this.app.use('/apis/image-upload', ImageUploadRouter)
  }

  // starts the server and tells the terminal to post a message that the server is running and on what port
  public async listen (): Promise<void> {
    await this.app.listen(this.app.get('port'))
    console.log('Express application built successfully')
  }
}
