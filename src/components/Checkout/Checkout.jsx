import React from "react";
function Checkout(props) {
    return (
        <div  className="  modal"  style={props.showCheck ? {visibility: "visible"} : null}>
            <h2>Checkout</h2>
            <p className="cart-total"  >Total Amount : £ {(props.totalAmount).toFixed(2)}</p>
            <form action=""   >
                <div className="control">
                <input
                    type="text"
                    required
                    placeholder="Full Name"
                    onChange={(evt) => {
                        props.changeValue(evt);
                    }}
                    value={props.details.fName}
                    name="fName"
                />
                <input
                    type="mail"
                    required
                    placeholder="E-Mail Address"
                    value={props.details.mail}
                    onChange={(evt) => {
                        props.changeValue(evt);
                    }}
                    name="mail"
                />
                <input
                    type="text"
                    required
                    placeholder="Street"
                    value={props.details.street}
                    onChange={(evt) => {
                        props.changeValue(evt);
                    }}
                    name="street"
                />
                <div className="control-row">
                    <input
                    required
                        type="text"
                        placeholder="Postal Code"
                        value={props.details.posteCode}
                        onChange={(evt) => {
                            props.changeValue(evt);
                        }}
                        name="posteCode"
                    />
                    <input
                    required
                        type="text"
                        placeholder="City"
                        value={props.details.city}
                        onChange={(evt) => {
                            props.changeValue(evt);
                        }}
                        name="city"
                        
                    />
                    </div>
                    </div>
            <div className="modal-actions">
                <p className='text-button' onClick={() => {
                    props.hideCheck()
                }} >Close</p>
                    <button className='button' onClick={
                        () => {
                            props.finish( )
                        }} type="button"  >Submit Order</button>
                
                </div>
                </form>
        </div>
    );
}

export default Checkout;
