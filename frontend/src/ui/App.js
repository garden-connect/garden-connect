import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { FourOhFour } from './FourOhFour'
import { Signup } from './Signup'
import { Signin } from './Signin'
import { Profile } from './Profile'
import { Rating } from './Rating'
import { Hands } from './Hands'
import { Harvest } from './Harvest'
import { Post } from './Post'
import { Conversation } from './Conversation'
import { NavBar } from './shared/components/NavBar'
import { Home } from './Home'
import { Provider } from "react-redux";


export const App = (store) =>  (
    <>
        <Provider store={store}>
        <BrowserRouter>

            <NavBar/>

            <Switch>
                <Route exact path='/home' component={ Home } />
                <Route exact path='/' component={ Harvest } />
                <Route exact path={ '/hands'} component={Hands} />
                <Route exact path={ '/profile/:profileId'} component={Profile} profileId={":profileId"}/>
                <Route exact path={ '/conversation'} component={Conversation} />
                <Route exact path={ '/post'} component={Post} />
                <Route exact path={ '/rating/:ratingReviewedProfileId'}  component={Rating} ratingReviewedProfileId={":ratingReviewedProfileId"} />
                <Route exact path= {'/signup'}  component={Signup} />
                <Route exact path= {'/signin'} component={Signin} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>
        </Provider>

    </>
)