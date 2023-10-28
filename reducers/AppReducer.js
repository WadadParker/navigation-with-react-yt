
export const initialState={
    user:{_id:"653b01f5eb810f1f3e64ce81",isManager:true},
    employees:[]
    
}


export const AppReducer=(state,action)=>
{
    switch(action.type)
    {

        case "FETCH_EMPLOYEES":
            const onlyEmployees = action.payload.filter(item=>!item.isManager);
            return {...state,employees:onlyEmployees};

        case "USER_REGISTERED":
            return {...state};

        default:
            return state;
    }
}