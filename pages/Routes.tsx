import React from 'react'
import {BrowserRouter, Switch, Route,} from 'react-dom'
import Home from './home';
import Contact from './contact';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact-us" component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;
