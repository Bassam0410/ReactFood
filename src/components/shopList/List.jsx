import React from 'react'
import Items from './Items'

function List(props) {
  const custom = {
    visibility: 'visible',
  }

  return (
    <div className='modal'  style={props.listVisibility ? {visibility : 'visible' }: null}  >
      <h2>Your Cart</h2>
      <Items itemList={props.itemList} addItem={props.addItem} removeItem={props.removeItem} />
      <p className='card-total'>{props.amount}</p>
      <p className='cart-total' >Total : £ {props.total.toFixed(2)}</p>
      <div className="modal-actions ">
        <p className='text-button'  onClick = { props.hideList } >Close</p>
        <button className='button'  onClick={() => {
          props.checkout()
        }}>Go to Checkout</button>
      </div>
    </div>
  )
}

export default List