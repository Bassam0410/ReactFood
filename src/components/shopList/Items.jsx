import React from 'react'

function Items(props) {
    return (
        <>
            {props.itemList.map((item, index) => {
                return (
                    <div className='cart-item' key={item.id}>
                        <p className=' ' >{`${item.name} - ${item.count} x ${item.price}`}</p>
                        <div className="cart-item-actions">
                            <button onClick={() => {
                                props.removeItem({index: index , price : item.price})
                            }} >-</button>
                            <p>{item.count}</p>
                            <button onClick={() => {
                                props.addItem({name: item.name , price : item.price , count:  1 , id : item.id  , index : item.index} )
                            }} >+</button>
                        </div>
                    </div>)
            })}
        </>
    )
}

export default Items