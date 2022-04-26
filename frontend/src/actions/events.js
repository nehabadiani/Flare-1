import axios from 'axios';
import { API } from '../API';

export const getAllEvents = () => async(dispatch)=>{
    dispatch({type:'GET_EVENTS_REQ'});
    try{
        const response = await axios.get(`${API}/api/v1/getEvents`);
        dispatch({ type: 'GET_EVENTS_SUCCESS', payload: response.data.events });
    }catch(e){
        dispatch({ type: 'GET_EVENTS_FAIL', payload: e });
    }
}