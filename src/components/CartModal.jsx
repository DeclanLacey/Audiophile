import * as utils from "../Utils.js"
import { ShoppingCartContext } from "./App"
import { useContext, useEffect, useState } from "react"
import {Link} from "react-router-dom"
import "../styles/CartModal.css"


function CartModal(props) {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext)
    const [cartTotal, setCartTotal] = useState()
    let shoppingCartItemElements = []

    function changeCount(event, plusOrMinus) {
        const productElementId = parseInt(event.target.parentNode.parentNode.getAttribute('cartid'))
        setShoppingCart(prevState => {
            return (
                prevState.map((product, index) => {
                    if(plusOrMinus === "plus") {
                        return index === productElementId ?
                   
                        {
                            ...product, 
                            count: product.count + 1
                        }
                        : 
                        product
                    }else if (plusOrMinus === "minus" && product.count >= 1) {
                        return index === productElementId ?
                        {
                         ...product, 
                         count: product.count - 1
                        }
                        : 
                        product
                    }else {
                        return product
                    }
                })
            )
        })
    }


    function renderShoppingCartItems() {
        for (let i = 0; i < shoppingCart.length; i++) {
            shoppingCartItemElements.push(
                <div className="cartModal_product-container" cartid={i} key={i}>
                    <div className="cartModal_product-img-name-container">
                        <img className="cartModal_product-img" src={`.${shoppingCart[i].picture}`} />
                        <div className="cartModal_name-price-container">
                            <p className="cartModal_name"> {shoppingCart[i].shortName}</p>
                            <p className="cartModal_price"> {utils.formatCurrency(shoppingCart[i].price)}</p>
                        </div>
                    </div>
                    
                    <div className="cartModal_plus-minus-container">
                        <button onClick={(event) => changeCount(event,"minus")} className="cartModal_minus">-</button>
                        <p className="cartModal_product-count">{shoppingCart[i].count}</p>
                        <button onClick={(event) => changeCount(event, "plus")} className="cartModal_plus">+</button>
                    </div>
                    
                </div>
            )
        }
        return shoppingCartItemElements
    }

    function getTotalPrice() {
        let total = 0
        for(let i = 0; i < shoppingCart.length; i++) {
            total += (shoppingCart[i].price * shoppingCart[i].count)
        }
        return total
    }

    function checkForZeroProductCount() {
        for (let i = 0; i < shoppingCart.length; i++) {
            if (shoppingCart[i].count === 0) {
                setShoppingCart(prevState => prevState.filter((product) => product.name !== shoppingCart[i].name))
            }
        }
    }

    function clearCart() {
        setShoppingCart([])
    }

    useEffect(() => {
        checkForZeroProductCount()
    })

    return (
        <section className="cartModal_shopping-cart">
            <div> </div>
            <div className="cartModal_cart-name-container">
                <h1 className="cartModal_item-count">Cart ({shoppingCart.length})</h1>
                <p onClick={clearCart} className="cartModal_remove-all-text"> Remove all</p>
            </div>
            {renderShoppingCartItems()}

            <div className="cartModal_total-container">
                <p className="cartModal_total-title">Total</p>
                <p className="cartModal_total-value">{utils.formatCurrency(getTotalPrice())}</p>
            </div>
            <Link onClick={() => props.setShoppingCartOpen(false)} to="/Checkout"><button className="shared-btn-style-orange cartModal_btn"> checkout</button></Link>
        </section>
    )
}

export default CartModal