import React,{Component, Fragment} from 'react';
import Text from './Text';
import ErrorBoundary from './ErrorBoundary';
import ButtonClickCounter from './HOC/ButtonClickCounter';
import InputCounter from './HOC/InputCounter';
import {connect} from 'react-redux';
import {lineItemOne, lineItemTwo} from './actions';

const SampleRef = React.forwardRef((props, ref) => {
        return (
            <TextContext.Provider value={{jboss: 'asdfasdf', myRef: ref}}>
                <Text {...props}>
                    <div>test</div>
                </Text> 
            </TextContext.Provider>
        )
    })

class Home extends Component {

    constructor(props) {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
        var items = ["ReacJS", "Javascript", "HTML", "CSS", "Bootstrap", "Java", "Android"];
        this.state = {
            inputVal: 'as',
            pwd: 'df',
            sample: 'gf',
            input_field: 'lk',
            aboveLimit: false,
            displayItems: items,
            backupItems: items
        }
    }

    buttonClick(val) {
        console.log('Button has been clicked', val);
    }

    handleChange(e) {
        console.log('val', e.target.value);
        this.setState({
            inputVal: ''
        })
    }

    handlePwdChange(e) {
        this.setState({
            pwd: e.target.value
        })
    } 
    handleSubmit(e) {
        console.log("handle submit", e);
        e.preventDefault;
        return false;
    }
    
    static getDerivedStateFromProps(props, state) {
        return null;
    }
    shouldComponentUpdate(nextProps, nextSttate) {
        console.log('nexrprops', nextProps);
        console.log('nextState', nextSttate);
        return true;
    }
    inputChange(e) {
        var items = this.state.backupItems;
        var newItems = [];
        for(var i=0; i<items.length; i++) {
            var lowercase = e.target.value.toLowerCase();
            if(items[i].toLowerCase().startsWith(lowercase)) {
                newItems.push(items[i]);
            }
        }
        this.setState({
            displayItems: newItems
        })
        
        // this.props.dispatch({
        //     type: "LINE_ITEM_ONE",
        //     params: {count: e.target.value}
        // })
        lineItemOne(this.props.dispatch, {params: {count: e.target.value}} );

        console.log("this.props", this.props);
    }

    componentDidCatch(error, info) {
        console.log("Error!!!!!");
    }

    render() {
        console.log('render', this.state.displayItems );
        return ( 
            <ErrorBoundary>
                <div>
                    <h1>HOME JS</h1>
                    <input type='text' id='input_field' onChange={this.inputChange.bind(this)} />
                    {/* <TextContext.Provider value={{jboss: 'asdfasdf'}}>
                         <Text onClick={this.buttonClick} ref={sampleRef}>
                            <div>test</div>
                        </Text>  
                    </TextContext.Provider> */}
                    <SampleRef onClick={this.buttonClick} ref={sampleRef} />
                    {/* { this.state.displayItems.map((val, index) => {
                        return (
                            <div>{val}</div>
                        )
                    })
                    } */}
                    <ButtonClickCounter/>
                    <InputCounter />
                </div>
           </ErrorBoundary>
        )
    }
}

export const TextContext = React.createContext({name: 'react context'});
const sampleRef = React.createRef();

const mapStateToProps = (state) => ({
    counter: state
});

const mapDispatchToProps = (dispatch) => ({
    lineItemOne: () => dispatch(lineItemOne),
    lineItemTwo: () => dispatch(lineItemTwo)
})
export default connect(mapStateToProps)(Home);