import { useState, useEffect, createContext } from "react";
import axios from "axios";

const StandContext = createContext()

const StandProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({})

    const getCategories = async() => {
        const { data } = await axios("/api/categories")
        setCategories(data)
    }

    useEffect(()=> {
        getCategories()
    },[])

    // select default category when app start
    useEffect(()=> {
        setCurrentCategory(categories[0])       
    }, [categories])

    const handleDetectedCategory = (id) => {
        const category = categories.filter( cat => cat.id === id)
        setCurrentCategory(category[0])
        
    }

    return (
        <StandContext.Provider
            value={{
                categories,
                currentCategory,
                handleDetectedCategory,

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