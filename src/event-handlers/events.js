/* [==================================================================] 
    Description:
   This is all the event handlers a declared. 

    filename: src/event-handlers/index
{[====================================================================] */

/* Importing all necessary data from data folder */
// import {SIZE} from '../index'
import * as KEY from '../lib'
/* REDUCER: SECTION DETAILS */
// Must change the initial total out of 76 question
// testing now 0->26, 26
const global_initial = 0
const total_bt = 10
const total_sec_A = 15
const total_sec_B = 25
const total_sec_C = 10
const stop_1 = global_initial + total_bt
const stop_2 = stop_1 + total_sec_A
const stop_3 = stop_2 + total_sec_B
const stop_4 = stop_3 + total_sec_C


const SECTION_DICT = {
    BLIND_TEST:{
        id:0,
        name: 'Ujian Buta Warna',
        initial: global_initial,
        total: stop_1,
        status: false // Indicating user haven't reached here yet
    }
    ,BAHAGIAN_A:{
        id:1,
        name: 'Bahagian A',
        initial: stop_1, 
        total: stop_2,
        status: false // Indicating user haven't reached here yet
    }
    ,
    BAHAGIAN_B:{
        id:2,
        name: 'Bahagian B',
        initial: stop_2,
        total: stop_3,
        status: false
    },
    BAHAGIAN_C:{
        id:3,
        name: 'Bahagian C',
        initial: stop_3,
        total: stop_4,
        status: false
    },
    FINAL:{
        id:4,
        name: 'FINAL',
        // initial: 40,
        // total: 50,
        status:null
    }
}
// console.log(SECTION_DICT.BAHAGIAN_A)
export const SECTION = (state = SECTION_DICT.BLIND_TEST,action) =>{
    switch(action.type){
        case 0:
            return state = SECTION_DICT.BLIND_TEST;
        case 1:
            return state = SECTION_DICT.BAHAGIAN_A;
        case 2:
            return state = SECTION_DICT.BAHAGIAN_B;
        case 3:
            return state = SECTION_DICT.BAHAGIAN_C;
        case 4:
            return state = SECTION_DICT.FINAL;
        default:
            return state;
    }
}

export const PROCEED = (state = [SECTION_DICT.BLIND_TEST.status,
                                 SECTION_DICT.BAHAGIAN_A.status,
                                 SECTION_DICT.BAHAGIAN_B.status,
                                 SECTION_DICT.BAHAGIAN_C.status,
                                 SECTION_DICT.FINAL.status],action) =>{
    switch(action.type){
        case SECTION_DICT.BLIND_TEST.name:
            return state.map((list,index) => index === SECTION_DICT.BLIND_TEST.id? list =true: list= false)
        case SECTION_DICT.BAHAGIAN_A.name:
            return state.map((list,index) => index === SECTION_DICT.BAHAGIAN_A.id? list =true: list= false)
        case SECTION_DICT.BAHAGIAN_B.name:
            return state.map((list,index) => index === SECTION_DICT.BAHAGIAN_B.id? list =true: list= false);
        case SECTION_DICT.BAHAGIAN_C.name:
            return state.map((list,index) => index === SECTION_DICT.BAHAGIAN_C.id? list =true: list= false)
        default:
            return state
    }
}

/* INITIAL VALUES for ALL QUESTION INQUERY STATUSES */
const INITIAL_VAL_STATUS = (len) =>{
    let content = []
    for(let i = 0; i< len; i++){
        
        content.push({id:i+1, status:KEY.NOT_ANSWERED, lock:KEY.UNDEF})

    }
    
    return content
} /* END OF INITIAL_VAL_STATUS */

 /* FUNCTION TO RETURN AN UPDATE STATE FOR INQUIRY STATUS */
const UPDATE_STATE = (state,current_question,typeof_ANSWER) =>{
    return state.map(item => item.id !== current_question ? item: 
    {   ...item,
        id: current_question,
        status: KEY.ANSWERED,
        lock: typeof_ANSWER
    }) /* END OF MAP FUNCTION */
} /* END OF UPDATE STATE */

/* REDUCER: Handle user selection answers */
export const INQUIRY_STATUS = (state = INITIAL_VAL_STATUS(60), action) =>{
    switch(action.type){
        case KEY.ANSWER_A:
            return UPDATE_STATE(state,action.payload.id, KEY.ANSWER_A)
        case KEY.ANSWER_B:
            return UPDATE_STATE(state,action.payload.id, KEY.ANSWER_B)
        case KEY.ANSWER_C:
            return UPDATE_STATE(state,action.payload.id, KEY.ANSWER_C)
        case KEY.ANSWER_D:
            return UPDATE_STATE(state,action.payload.id, KEY.ANSWER_D)
        default:
            return state
    } /*END OF SWITCH */
}/*END OF INQUIRY STATUS */

/* 
    Note:
    The reading of this USER_PROMPT is different since, an array start from 0,
    while normal counting start from 1:
        Array -> 0 ex. [ 0, 1, 2, 3, 4] == 5 element
        Normal -> 1 ex [ 1, 2, 3, 4, 5] == also 5 element
    Hence, the state of this should be 0 to display the first object variable of 
    the data.
    The primarily output needed is an array counting, since the data is displayed
    from an object based array
*/
export const USER_PROMPT = (state = 0,action) =>{
    // const ARRAY_SIZE_CONV = KEY.INITIAL_SIZE-1 /*Array count convert */
    switch(action.type){
        case KEY.NEXT:
            return (state < action.payload.total -1? state+1: state = action.payload.total -1)
        case KEY.PREV:
            return (state > 0 ? state-1: state = 0)
        case KEY.NUMBER:
            return state = action.payload.id;
        case KEY.RESET:
            return state = 0;
        default:
            return state;
    }
} /* END OF USER_PROMPT reducer */


export const DIALOG_BOX = (state =false,action) =>{
    switch(action.type){
        case 'submit':
            return state = true;
        case 'cancel':
            return state = false;
        default:
            return state = false;
    }
}
const start_time = 50
const ini_timer ={
    time:start_time*60,
    minute: 0,
    second: 0
}
// Countdown Timer
export const COUNTDOWN = (state = ini_timer, action) =>{
  
    switch(action.type){
        case 'time':
            return {...state,time: action.payload.current,}
        case 'minute':
            return {...state,minute: action.payload.current,}
        case 'second':
            return {...state,second: action.payload.current,}
        default:
            return state
    }
}

