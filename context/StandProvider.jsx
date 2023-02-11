import { useState, useEffect, createContext } from "react";
import axios from "axios";

const StandContext = createContext()

const StandProvider = ({ children }) => {
    const [categories, setCategories] = useState([])

    const getCategories = async() => {
        const { data } = await axios("/api/categories")
        setCategories(data)
    }

    useEffect(()=> {
        getCategories()
    },[])
    return (
        <StandContext.Provider
            value={{
                categories,
            }}
        >
            {children}
        </StandContext.Provider>
    )
}

export {
    StandProvider
}

export default StandContext;