export const getAllEventsReducer = (state={events:[]},action)=>{
    switch(action.type){
        case 'GET_EVENTS_REQ':
            return {
                ...state,
                loading:true
            }
        case 'GET_EVENTS_SUCCESS':
            return {
                events:action.payload,
                loading:false
            }
        case 'GET_EVENTS_FAIL':
            return {
                error:action.payload,
                loading:false
            }   
        default: return state     
    }
}

