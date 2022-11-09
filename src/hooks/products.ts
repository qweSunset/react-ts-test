import { useEffect, useState } from "react"
import { IProduct } from "../models"
import axios from 'axios'
import {AxiosError} from 'axios'

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]) 
  const [loading, setLoadind] = useState(false)
  const [error, setError] = useState('')

  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product])
  }

  async function fetchProducts() {
    try {
      setError('')
      setLoadind(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=10')
      setProducts(response.data)
      setLoadind(false)
    } catch(e: unknown) {
      const error = e as AxiosError
      setLoadind(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return {products, error, loading, addProduct}
}