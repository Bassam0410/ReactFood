import React from "react";

function Card(props) {
    return <div className=" meal-item" style={props.list ||props.submit|| props.check ? {filter : 'blur(5px)' } : null} >
        <img src={`${props.image}`} alt="Food Image" />
        <h2>{props.name}</h2>
        <p className='meal-item-price'> £{props.price}</p>
        <p className='meal-item-description' >{props.description}</p>
        <button className="button meal-item-actions" onClick={() => {
            props.addItem({name: props.name , price : props.price , count:  1 , id : props.id  , index : props.index})
        }} >Add to Cart</button>    
    </div>;
}
export default Card;
