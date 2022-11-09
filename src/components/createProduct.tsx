import axios from "axios"
import React, { useState } from "react"
import { IProduct } from "../models"
import { ErrorMessage } from "./errorMessage"

const newProductData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 22.2,
        count: 12
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export const CreateProduct = ({onCreate}: CreateProductProps) => {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid product title')
            return
        }

        newProductData.title = value
        const response = await axios.post('https://fakestoreapi.com/products', newProductData)
        onCreate(response.data)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" className="border py-2 px-4 mb-2 w-full outline-0 rounded"
                placeholder="Enter product title..."
                value={value}
                onChange={changeHandler} 
            />
            {error && <ErrorMessage error={error} />}
            <button type="submit" className="border rounded py-2 px-4 bg-yellow-400 hover:text-white">Create</button>
        </form>
    )
}