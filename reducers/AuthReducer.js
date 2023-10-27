
export const authInitialState={
    user:{_id:"653b01f5eb810f1f3e64ce81"},
    isRegistered:false
}


export const AuthReducer=(state,action)=>
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