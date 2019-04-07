import { UPDATE_A, UPDATE_B } from '../type/types'
const initialState ={
    a:1,
    b:1
}
const reducer = (state= initialState,action) => {
    switch(action.type){
        case UPDATE_A :
            return {
                ...state,
                a:action.a+action.b
            }
        case UPDATE_B :
            return {
                ...state,
                b:action.a+action.b
            }
        default: 
            return state;
    }


    // if(action.type === 'UPDATE_A'){
    //     return {
    //         ...state,
    //         a:state.a+state.b
    //     }
    // }
    // if(action.type === 'UPDATE_B'){
    //     return {
    //         ...state,
    //         b:state.a+state.b
    //     }
    // }
    // return state;
}
export default reducer