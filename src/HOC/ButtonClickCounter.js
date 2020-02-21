import React, {Component} from 'react';
import counter from './counter';

class ButtonClickCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.buttonClick}>Click me {this.props.count}</button>
                <h6>Button Counter {this.props.btnClickCount}</h6>
            </div>
        )
    }
}

export default counter(ButtonClickCounter);