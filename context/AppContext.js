import React, {useState,useReducer,useContext,createContext} from "react";

import { AuthReducer,authInitialState } from "../reducers/AuthReducer";
import { initialState, AppReducer } from "../reducers/AppReducer";

const AppContext = createContext();

export const AppProvider=({children})=>
{
    const [authState, authDispatch] = useReducer(AuthReducer , authInitialState);
    const [state,dispatch] = useReducer(AppReducer , initialState);


    return (
        <AppContext.Provider value={{authState, authDispatch, state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export const useData=()=>useContext(AppContext);