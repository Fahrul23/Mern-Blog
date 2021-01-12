const initialState ={   
    name: 'fahrul'
}
const globalReducer = (state=initialState,action)=>{
    if(action.type === 'UPDATE_NAME'){
        return{
            ...state,
            name: 'ihsan'
        }
    }
    return state;
}


export default globalReducer;