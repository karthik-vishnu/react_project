export const lineItemOne = (dispatch, params) => (
    dispatch({
        type: "LINE_ITEM_ONE",
        params
    })
)

export const lineItemTwo = (params) => ({
    type: "LINE_ITEM_TWO",
    params
})