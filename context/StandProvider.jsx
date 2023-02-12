import { useState, useEffect, createContext } from "react";
import axios from "axios";

const StandContext = createContext()

const StandProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)

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

    const handleSetProduct = (product) => {
        setProduct(product)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    return (
        <StandContext.Provider
            value={{
                categories,
                currentCategory,
                handleDetectedCategory,
                product,
                handleSetProduct,
                modal,
                handleChangeModal

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