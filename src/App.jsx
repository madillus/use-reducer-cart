import './index.css';
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import Cart from './components/Cart';
import Products from './components/Products';
import { cartReducer } from './reducers/cartReducer';

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  })

  const fetchProducts = async () => {
    const { data } = await axios.get('https://dummyjson.com/products')

    dispatch({
      type: 'ADD_PRODUCTS',
      payload: data.products,
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div style={{ display: 'flex' }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  )
}
