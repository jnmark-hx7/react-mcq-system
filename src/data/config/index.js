// import ans from './ANS_A.json'
import ANS_BT from './ANS_BT.json'
import ANS_A from './ANS_A.json'
import ANS_B from './ANS_B.json'
import ANS_C from './ANS_C.json'
import * as KEY from '../../lib'
import {dict} from '../index'

/* Function to MANAGE DATA accordingly to their respective section */

const ANSWER_DICT = [ANS_BT,ANS_A,ANS_B,ANS_C]
const TEST_DICT = [ANS_BT,ANS_A,ANS_B,ANS_C]

function DATA_COMPILE(){
    let B_DATA = []

    // I want to write need data structure for accurate extract real answer
    // #REQURIED -> Indexes @ seeds required to map the location of real answer
    let t_DATA= []
    let b;

    for(let list = 0; list<TEST_DICT.length; list++){
        // console.log(dict[list].seeds)
        for(let j = 0; j< dict[list].total; j++){
            b = TEST_DICT[list][dict[list].seeds[j]-1]
            t_DATA.push(b)
           
        }
    }

    //Extracting each question accordingly to resp section size
    for(let i = 0; i< dict.length; i++){
        for(let j =0; j<dict[i].total; j++){
            let seed = dict[i].seeds[j]-1
            B_DATA.push(ANSWER_DICT[i][seed])
        }
    }
    for(let id = 0; id<KEY.TOTAL_QUESTION; id++){
        B_DATA = B_DATA.map((item,index) => index === id? {...item,id:id+1}: item)
    }

    return t_DATA
    
}

const REAL = DATA_COMPILE()
export default REAL