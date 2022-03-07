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
import { Message } from './Message'
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
                <Route exact path='/' component={ Profile } />
                <Route exact path={ '/hands'} component={Hands} />
                <Route exact path={ '/harvest'} component={Harvest} />
                <Route exact path={ '/message'} component={Message} />
                <Route exact path={ '/post'} component={Post} />
                <Route exact path={ '/rating'}  component={Rating} />
                <Route exact path= {'/signup'}  component={Signup} />
                <Route exact path= {'/signin'} component={Signin} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>
        </Provider>

    </>
)