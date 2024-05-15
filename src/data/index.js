/* [==================================================================] 
    Description:
    This is the primarily database of all question given. Here merely 
    editting the type or context of question.

    filename: src/db/index.js
{[====================================================================] */
// import IMG from '../data/img'
import * as KEY from '../lib'
import BLIND_TEST from '../data/BLIND_TEST.json'
import SECTION_A from '../data/Data_A.json'
import SECTION_B from '../data/Data_B.json'
import SECTION_C from '../data/Data_C.json'
/* -----------------------------[SEED GENERATOR] ----------------------------- */
/* Using LCG to generate different seed */
function SEEDS(limit,total){
    let seeds = [] // store an array of seed
    /* -------------------------------------------------------------------------
    Setup an LCG required:
        General formula of LCG:
            x_i = a * x_o * mod m
        where, x_i = sequence of pseudo-random numbers
                m = modulus
                a = multiplier
                x_o = initial value of sequence known as starter seed
    ---------------------------------------------------------------------------*/
   const min =1
   const max = 50
//    const a = Math.floor(Math.random()*(max-min+1))+min
    const a = 2
   let start_seed = Math.floor(Math.random()*(max-min+1))+min
//    console.log(start_seed)
    // var start_seed = 7
   const m = limit
   start_seed = (a*start_seed+limit)%m
   let LCG = 1
   for(let i = 0; i<total; i++){
        LCG = (a*start_seed+limit)%m
        if(LCG === 0){
            start_seed = Math.floor(Math.random()*(max-min+1))+min
        }else{
            start_seed = LCG
            seeds.push(LCG)
        }
        // console.log(start_seed)   
       
   }
   
    // console.log("test"+seeds)
    return seeds
}
export const dict = [
    {
        state:BLIND_TEST,
        total:10,
        seeds:SEEDS(BLIND_TEST.length,10)

    },
    {
        state:SECTION_A,
        total: 15,
        seeds:SEEDS(SECTION_A.length,15)
    }, 
    {
        state:SECTION_B,
        total: 25,
        seeds:SEEDS(SECTION_B.length,25)
    }, 
    {
        state:SECTION_C,
        total: 10,
        seeds:SEEDS(SECTION_C.length,10)
    }]

/* Function to COMPILE DATA from all section */
// const test = dict[0]
// console.log(test)
function DATA_COMPILE(){
    let B_DATA = []
    //Extracting each question accordingly to resp section size
    for(let i = 0; i< dict.length; i++){
        for(let j =0; j<dict[i].total; j++){
            let seed = dict[i].seeds[j]-1
            B_DATA.push(dict[i].state[seed])
        }
    }
    // convert the existing id to 1->50 
    for(let id = 0; id < KEY.TOTAL_QUESTION; id++){
        B_DATA = B_DATA.map((item,index) => index === id? {...item,id:id+1}: item)
    }
    // console.log(B_DATA)
    return B_DATA
}
export const DATA = DATA_COMPILE()
export default DATA;