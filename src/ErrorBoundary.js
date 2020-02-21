
import React, {Component} from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        console.log("getDerivedStateFromError");
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log("error !!");
        console.log("errorInfo");
    }

    render() {
        return (
            this.state.hasError ? <div> <h1>ERROR !!!</h1> </div> : this.props.children
            
        )
    }
}

export default ErrorBoundary;