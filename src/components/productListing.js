 import React, { useEffect} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import ProductComponent from './productComponent';
import axios from 'axios';
import {setProducts} from '../redux/actions/productActions'
const ProductListing =  () => {
    //const products = useSelector(state => state)
   // console.log(products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((error) => { console.log(error, 'error') })
        dispatch(setProducts(response.data));
    }
    useEffect(()=>{fetchProducts()},[])
    //console.log('products: ', products)
    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>

    )
}
export default ProductListing;