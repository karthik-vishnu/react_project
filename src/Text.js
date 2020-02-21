import React, {Component} from 'react';
import {TextContext} from './Home';

class Text extends Component {
    constructor(props) {
        super(props);
     //   this.btnClick = this.btnClick.bind(this);
     this.state = {
         clickCount: 0
     }
    }

    btnClick(context) {
        var text = "i'm assigning a new value";
        console.log('conetxt', context);
        var count = this.state.clickCount;
        this.setState({
            clickCount: ++count
        })
      //  this.props.onClick(text);
    }

    render() {
        console.log('this.context', this.props);
        if(this.state.clickCount > 2) {
            throw new Error("There is an error");
        }
        return (
            <TextContext.Consumer>
                {(val) => (
                    <button id='btn' ref={val.myRef} onClick={() => this.btnClick(val)}>Click me </button>
                )}
                
            </TextContext.Consumer>
        )
    }
}

export const myVar = "Haii";
export default Text;