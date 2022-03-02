import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import { Signup } from './Signup'
import { Signin } from './Signin'

export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path= {'/signup'}  component={Signup} />
                <Route exact path= {'/signin'} component={Signin} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)