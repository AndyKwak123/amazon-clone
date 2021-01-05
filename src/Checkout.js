import React from 'react';
import banner from './assets/deal.jpg';
import {useStateValue} from "./StateProvider";
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from "./Subtotal.js";

export default function Checkout() {
    const[{basket}] = useStateValue();
   
    return (
        <div className="checkout">
            <div className="checkoutBanner">
                <img className="checkout" src={banner}/>
            </div>
            {basket?.length ===0 ? (
                <div>
                    <h2> Your Shopping Basket is empty!</h2>
                </div>
            ) : (
                <div>
                    <h2> Your Shopping Basket</h2>
                    {basket?.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}   
            {basket.length > 0 && 
                    <Subtotal/> 
             }
        </div>
    )
}
