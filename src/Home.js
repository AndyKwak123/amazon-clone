import React from 'react';
import banner from './assets/amazon.jpg';
import Product from './Product.js'
import { BrowserRouter } from "react-router-dom";


export default function Home() {
    return (
        <div className="home">
            <img className="banner" src={banner}/>     
            <div className="row">
            <Product 
                id="1234243"
                title="Lean Startup"
                price={10023}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"    
            />  
               <Product 
                id="1234243"
                title="Lean Startup"
                price={10023}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"    
            />  
               <Product 
                id="1234243"
                title="Lean Startup"
                price={10023}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"    
            />  
            </div>
            <div className="row">
            <Product 
                id="1234243"
                title="Lean Startup"
                price={10023}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"    
            />  
               <Product 
                id="1234243"
                title="Lean Startup"
                price={10023}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"    
            />   
            </div>
        </div>
    )
}

