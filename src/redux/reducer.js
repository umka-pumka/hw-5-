import {createAction, createReducer} from '@reduxjs/toolkit';



const intitialState = {
    num: 0,
}

export const incrementNum = createAction('INCREMENT_NUM');



export default createReducer(intitialState, (builder)=>{
        builder
        .addCase('INCREMENT_NUM',(state, action)=>{
            if(state.num < 20){
                state.num = state.num + 1
            } else{
                state.num = 20
            }
        })
})