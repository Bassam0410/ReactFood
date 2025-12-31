import React, { useState } from 'react'
import List from './shopList/List'
import Form from './Checkout/Form'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header(props) {
    return (
        <div id='main-header' >
            <div id="title">
                <img src="public/logo.jpg" alt="image" />
                <h2>ReactFood</h2>
            </div>
            <h1 className='text-button' onClick={() => {
                props.handleListVisibility ()
            } } >Cart ({props.listLength}) <ShoppingCartIcon /> </h1>
        </div>
    )
}
export default Header