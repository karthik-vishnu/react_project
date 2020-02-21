import React, {Component} from 'react';
import counter from './counter';

class InputCounter extends Component {
    
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter your text" onChange={this.props.textChange}>{this.props.inputText}</input>
                <h6>Input Counter {this.props.textCount}</h6>
            </div>
        )
    }
}


export default counter(InputCounter);