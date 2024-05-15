import {createStore, combineReducers} from 'redux'
import {SECTION, INQUIRY_STATUS, USER_PROMPT, DIALOG_BOX, PROCEED,COUNTDOWN} from './events'; // Extract Reducer from this folder

export const STORE = createStore(combineReducers(
    {INQUIRY_STATUS, 
        USER_PROMPT,
        SECTION,
        DIALOG_BOX,
        PROCEED,
        COUNTDOWN}))
export default STORE