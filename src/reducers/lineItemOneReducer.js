const initialState = {
    isLoading: false
}

const lineItemOneReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LINE_ITEM_ONE":
        console.log("actions", {...state, ...action.params});
            return {...state, ...action.params};
        default: 
            return state;
    }
}

export default lineItemOneReducer;