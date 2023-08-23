import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
const Subtotal = () => {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal({basket.length} items):<strong>{value}</strong>  
                        </p>
                        <small className='subtotal_gift'>
                            <input type="checkbox" />This order Contains a gift
                        </small>
                    </>
                )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeprator={true}
                    prefix={"$"}
                />
            <button>Proceed To Checkout</button>
        </div>
    );
}

export default Subtotal
