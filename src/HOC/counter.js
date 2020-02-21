import React, {Component} from 'react';


function counter(OriginalComponent) {
    class CounterComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                textCounter: 0,
                inputText: '',
                btnClickCounter: 0
            }
        }

        handleChange(e) {
            this.setState({
                textCounter: e.target.value.length,
                inputText: e.target.value
            })
        }

        handleClick() {
            const prevCount = this.state.btnClickCounter;
            this.setState({
                btnClickCounter: prevCount + 1
            })
        }

        render() {
            return (
                <OriginalComponent buttonClick={this.handleClick.bind(this)} textChange={this.handleChange.bind(this)} textCount={this.state.textCounter} btnClickCount={this.state.btnClickCounter} />
            )
        }
    }

    return CounterComponent;
}


export default counter;