import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const StandContext = createContext()

const StandProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])

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

    const handleAddOrder = ({categoryId, ...product}) => {

        //check if the product is already added
        if(order.some( productState => productState.id === product.id)) {
            // update order amount
            const updateOrder = order.map( productState => productState.id === product.id
                ? product : productState )
            setOrder(updateOrder)
            toast.success("Saved changes correctly!")

        } else {
            setOrder([...order, product])
            toast.success("Order added successfully!")
        }
        setModal(false)   
    }

    const handleEditAmount = (id) => {
        const updateProduct = order.filter(product => product.id === id)
        setProduct(updateProduct[0])
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
                handleChangeModal,
                handleAddOrder,
                order,
                handleEditAmount
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