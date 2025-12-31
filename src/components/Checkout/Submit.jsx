import React from 'react'

function Submit(props) {
  return (
      <div className='modal' style={ props.submit ?  {visibility: 'visible'} : null} >
          <h2>Thank you! Your order has been successfully placed</h2>
          <p><span className='boldText' > name:</span>  { props.name}</p>
          <p> <span className='boldText'> Address:</span> { props.address}</p>
          <p> <span className='boldText'> Total price : £</span> {props.price.toFixed(2)}</p>
          <div className="modal-actions">
          <button className='button ' onClick={() => {
              props.hide()
          }}> Ok</button>
              
          </div>
    </div>
  )
}

export default Submit