import { ShoppingCartContext } from "./App"
import { useContext, useEffect, useState } from "react"
import "../styles/Checkout.css"
import CheckoutSummary from "./CheckoutSummary"

function Checkout() {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext)


    return (
        <div>
            <p className="checkout_go-back-text">Go Back</p>
            <section className="checkout_form-container">
                <h1 className="checkout_title">Checkout</h1>
                <form>

                    <h2 className="checkout_section-title"> Billing Details </h2>
                    <div className="checkout_input-container">
                        <label className="checkout_input-label"> Name</label>
                        <input required placeholder="Alexei Ward" className="checkout_input" />
                    </div>
                    <div className="checkout_input-container">
                        <label className="checkout_input-label"> Email Address </label>
                        <input required placeholder="alexei@mail.com" className="checkout_input"/>
                    </div>
                    <div className="checkout_input-container">
                        <label className="checkout_input-label"> Phone Number </label>
                        <input required type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="+1 202-555-0136" className="checkout_input"/>
                    </div>


                    <h2 className="checkout_section-title">Shipping Info</h2>
                    <div className="checkout_input-container">
                        <label className="checkout_input-label"> Your Address </label>
                        <input required placeholder="1137 Williams Avenue" className="checkout_input"/>
                    </div>
                    <div className="checkout_input-container">
                        <label className="checkout_input-label"> Zip Code </label>
                        <input required placeholder="10001" className="checkout_input"/>
                    </div>
                    <div className="checkout_input-container">
                        <label className="checkout_input-label"> City </label>
                        <input required placeholder="New York" className="checkout_input"/>
                    </div>
                    <div className="checkout_input-container">
                        <label className="checkout_input-label"> Country </label>
                        <input required placeholder="United States" className="checkout_input"/>
                    </div>


                    <h2 className="checkout_section-title"> Payment Details</h2>
                    <div className="checkout_input-container">
                        <label className="checkout_input-label"> Payment Method </label>
                        <div className="checkout_radio-inner-container">
                            <input required type="radio" className="checkout_radio-input" />
                            <label className="checkout_radio-label">e-Money</label>
                        </div>

                        <div className="checkout_radio-inner-container">
                            <input required type="radio" className="checkout_radio-input"/>
                            <label className="checkout_radio-label">Cash on Delivery</label>
                        </div>
                    </div>
                    <div className="checkout_input-container">
                        <label className="checkout_input-label"> e-Money Number </label>
                        <input required inputMode="numeric" pattern="[0-9\s]{13,19}" placeholder="238521993" maxLength="9" className="checkout_input"/>
                    </div>
                    <div className="checkout_input-container">
                        <label className="checkout_input-label"> e-Money PIN </label>
                        <input required inputMode="numeric" pattern="[0-9\s]{13,19}" placeholder="6891" maxLength="4" className="checkout_input"/>
                    </div>
                </form>
            </section>

        <CheckoutSummary shoppingCartData={shoppingCart} />
        </div>
    )
}

export default Checkout