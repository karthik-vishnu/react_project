import React, {Component, lazy, Suspense} from 'react';
import Module from 'common_utils/src/Module';
import {BrowserRouter, Link, Route, Switch, HashRouter} from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "greeting": "Hello world!"
        }
    }

    render () {
        const Home  = lazy(() => import("./Home"));
        const Login  = lazy(() => import("./login"));

        return (
            // <div onClick={() => this.setState({greeting: "Hello karthik"})}>
            //     {this.state.greeting}
            //     <Module/>
            // </div>
            <HashRouter>
                <div>
                    <p>
                        <Link to="/home">Home</Link>
                    </p>
                    <p>
                        <Link to="/App">App</Link>
                    </p>
                    <p>
                        <Link to="/text">text</Link>
                    </p>
                    <p>
                        <Link to="/login">Login</Link>
                    </p>
                </div>
                <Switch>
                    <Suspense fallback={<div> Loading... Please wait</div>}>
                        <Route exact path="/home" component={Home} testVal='this is the value for testing purpose'/>
                        <Route exact path="/login" component={Login} testVal='this is the value for testing purpose'/>
                    </Suspense>
                </Switch>
            </HashRouter>
        )
    }
}

export default App;