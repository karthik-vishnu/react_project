import React, {Component} from 'react';
import {TextContext} from './Home';

class Login extends Component {

    render() {
        console.log('test');
        return (
            <div>
                <h1>LOGIN JS</h1>
                <div>
                    <TextContext.Consumer>
                        {context => (
                            <div>asdfasdfasd </div>
                        )}
                        
                    </TextContext.Consumer>
                </div>
            </div>
        )
    }
}

export default Login;