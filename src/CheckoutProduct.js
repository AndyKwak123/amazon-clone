import React from 'react'
import './CheckoutProduct.css';
import {useStateValue} from "./StateProvider";


export default function CheckoutProduct({id, title, image ,price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    console.log(id, title, image, price, rating);

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: id,
            }
        })
    };
    return (
        <div className="CheckoutProduct">
            <div className="checkoutProductInfo">
                <p className="checkoutProductTitle"> {title} </p>
                <span className="checkoutPrice"> ${price}</span>
                <div className="checkoutProductRating">
            {Array(rating).fill().map((_)=>(
                        <p> &#11088;</p>
                    ))}
            </div>
                <img src ={image} alt=""/>
            </div>
          <button onClick={removeFromBasket} className="remove-btn"> Remove From Basket </button>
        </div>
    )
}
