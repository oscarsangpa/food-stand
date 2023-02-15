import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const StandContext = createContext()

const StandProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])
    const [name, setName] = useState("")
    const [total, setTotal] = useState(0)
    const router = useRouter()

    const getCategories = async() => {
        const { data } = await axios("/api/categories")
        setCategories(data)
    }

    useEffect(()=> {
        getCategories()
    },[])

    useEffect(()=> {
        const newTotal = order.reduce((total, product) => (product.price * product.amount)
        + total, 0)

        setTotal(newTotal)
    }, [order])

    // select default category when app start
    useEffect(()=> {
        setCurrentCategory(categories[0])       
    }, [categories])

    const handleDetectedCategory = (id) => {
        const category = categories.filter( cat => cat.id === id)
        setCurrentCategory(category[0])
        router.push("/")
        
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

    const handleDeleteProduct = (id) => {
        const deleteOrder = order.filter(product => product.id !== id)
        setOrder(deleteOrder)

    }

    const sendOrder = async(e) => {
        e.preventDefault()

        console.log("first")
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
                handleEditAmount,
                handleDeleteProduct,
                sendOrder,
                name,
                setName,
                total
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