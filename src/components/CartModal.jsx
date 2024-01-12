import { ShoppingCartContext } from "./App"
import "../styles/CartModal.css"
import { useContext, useEffect, useState } from "react"
import {Link} from "react-router-dom"
import ProductCard from "./ProductCard"

function CartModal() {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext)
    const [cartTotal, setCartTotal] = useState()
    let shoppingCartItemElements = []


    function formatCurrency(num) {
        const options = { style: 'currency', currency: 'USD', maximumSignificantDigits: 5  };
        let formatter = new Intl.NumberFormat('en-US', options);
        let price = formatter.format(num)
        return price
    }

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
                            <p className="cartModal_name"> {shoppingCart[i].name}</p>
                            <p className="cartModal_price"> {formatCurrency(shoppingCart[i].price)}</p>
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

    useEffect(() => {
        checkForZeroProductCount()
    })

    return (
        <section className="cartModal_shopping-cart">
            <div> </div>
            <div className="cartModal_cart-name-container">
                <h1 className="cartModal_item-count">Cart ({shoppingCart.length})</h1>
                <p className="cartModal_remove-all-text"> Remove all</p>
            </div>
            {renderShoppingCartItems()}

            <div className="cartModal_total-container">
                <p className="cartModal_total-title">Total</p>
                <p className="cartModal_total-value">{formatCurrency(getTotalPrice())}</p>
            </div>
            <Link to=""><button className="shared-btn-style-orange cartModal_btn"> checkout</button></Link>
        </section>
    )
}

export default CartModal