import { ShoppingCartContext } from "./App"
import "../styles/CartModal.css"
import { useContext, useState } from "react"

function CartModal() {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext)
    let shoppingCartItemElements = []

    function renderShoppingCartItems() {
        for (let i = 0; i < shoppingCart.length; i++) {
            shoppingCartItemElements.push(
                <div key={i}>
                    <div>
                        <img src={`.${shoppingCart[i].picture}`} />
                        <div>
                            <p> {shoppingCart[i].name}</p>
                            <p> {shoppingCart[i].price}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button>-</button>
                            <p>{shoppingCart[i].count}</p>
                            <button>+</button>
                        </div>
                    </div>
                    
                </div>
            )
        }
        console.log(shoppingCartItemElements)
        return shoppingCartItemElements
    }

    return (
        <aside className="shoppingCart">
            <div> </div>
            <div>
                <h1>Cart ({shoppingCart.length})</h1>
                <p> Remove all</p>
            </div>
            {renderShoppingCartItems()}
        </aside>
    )
}

export default CartModal