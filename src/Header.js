import React from 'react';
import {auth} from "./firebase"; 
import logo from './assets/amazon.png';
import {Link} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";

function Header() { 
    const [{basket, user}] = useStateValue();
    return(
        <nav className ="header">
            {/* Amazon Logo  */ }
            <Link to="/">
                <img className="header-logo" src={logo}></img>
            </Link>


            {/*Search Bar */}

            {/* 3 Icons */}S
            <div className="headerSearch">
                <input type ="text" className="headerSearchInput"/>
                <SearchIcon className="headerSearchIcon"/> 
            </div>        

            <div className="headerNav">
                <Link to ="/login" className="headerLink">
                    <div className="headerOption">
                        <span> Hello </span>
                        <span>Sign In</span>
                    </div>
                </Link>
                <Link to ="/login" className="headerLink">
                    <div className="headerOption">
                        <span> Returns </span>
                        <span>& Orders</span>
                    </div>
                </Link>
                <Link to ="/login" className="headerLink">
                    <div className="headerOption">
                        <span> Your </span>
                        <span>Prime</span>
                    </div>
                </Link>
                <Link to ="/checkout" className="headerLink">
                    <div className="headerOptionBasket">
                        <ShoppingBasketIcon fontSize="large"/>
                        <span className="itemCount"> {basket.length} </span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header;


