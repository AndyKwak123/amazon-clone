//setup data layer so we can track of the basket and the user on different components 
//import your React Context API tools
import React, {createContext, useContext , useReducer} from "react";


//completely empty data layer 
export const StateContext = createContext(); 

//BUILD YOUR PROVIDER 
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
export const useStateValue = () => useContext(StateContext);