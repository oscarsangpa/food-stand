import { useState, useEffect, createContext } from "react";

const StandContext = createContext()

const StandProvider = ({ children }) => {
    return (
        <StandContext.Provider
            value={{}}
        >
            {children}
        </StandContext.Provider>
    )
}

export {
    StandProvider
}

export default StandContext;