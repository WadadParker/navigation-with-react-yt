
export const initialState={
    user:{_id:"653b01f5eb810f1f3e64ce81",isManager:true},
    
}


export const AppReducer=(state,action)=>
{
    switch(action.type)
    {

        case "CREATE_USER":
            return {...state,user:action.payload};

        case "USER_REGISTERED":
            return {...state,isRegistered:true};

        default:
            return state;
    }
}