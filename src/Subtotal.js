import React from 'react'
import {useStateValue} from "./StateProvider";
import {subtotal} from "./Reducer";
import CurrencyFormat from 'react-currency-format';



export default function Subtotal() {
    const[{ basket, dispatch}] = useStateValue()
    return (
        <div>
            <CurrencyFormat
                renderText={(value) => (
                
                <p> Subtotal ({basket.length}) items: <strong> {value} </strong> </p>
                )}
                decimalScale={2}
                value={subtotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />
        </div>
    )
}
