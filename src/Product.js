import React from 'react'
import "./Product.css"
import {useStateValue} from "./StateProvider";


export default function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

 
    //add item to basket 
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };
    return (
        <div className="product">
            <p>{title}</p>
            <p className="productPrice">
                <small> $ </small>
                <strong>{price}</strong>
            </p>
            <div className="productRating">
                {
                    Array(rating).fill().map((_)=>(
                        <p> &#11088;</p>
                    ))}
            </div>
            <div className="productImage">
                <img src={image}/>
            </div>
            <button onClick = {addToBasket} className="productButtonBasket"> Add To Basket  </button>
        </div>
    )
}
