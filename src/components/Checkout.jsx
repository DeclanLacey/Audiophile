import { ShoppingCartContext } from "./App"
import { useContext, useState } from "react"
import { useNavigate} from "react-router-dom"
import OrderConf from "./OrderConf"
import CheckoutSummary from "./CheckoutSummary"
import "../styles/Checkout.css"

function Checkout() {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext)
    const [paymentType, setPaymentType] = useState("e-money")
    const [cartSubmitted, setCartSubmitted] = useState(false)
    const navigate = useNavigate()

    function addDashesToPhoneNumber(event) {
        if (event.key != 'Backspace' && (event.target.value.length === 3 || event.target.value.length === 7)){
            event.target.value += '-';
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        setCartSubmitted(true)
    }

    return (
        <div>
            {
                cartSubmitted 
                ?
                <>
                    <div className="checkout_page-cover"></div>
                    <div> 
                        <OrderConf setCartSubmitted={setCartSubmitted} />
                    </div>
                </>
                :
                    <></>
            }
            <p onClick={() => navigate(-1)} className="checkout_go-back-text">Go Back</p>
            <form onSubmit={handleSubmit} >
                <section className="checkout_form-container">
                    <h1 className="checkout_title">Checkout</h1>
                    
                        <h2 className="checkout_section-title"> Billing Details </h2>
                        <div className="checkout_input-container">
                            <label className="checkout_input-label"> Name</label>
                            <input required placeholder="Alexei Ward" className="checkout_input" />
                        </div>
                        <div className="checkout_input-container">
                            <label className="checkout_input-label"> Email Address </label>
                            <input pattern="[^ @]*@[^ @]*" required placeholder="alexei@mail.com" className="checkout_input"/>
                        </div>
                        <div className="checkout_input-container">
                            <label className="checkout_input-label"> Phone Number </label>
                            <input onChange={addDashesToPhoneNumber} maxLength="12" required type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="202-555-0136" className="checkout_input"/>
                        </div>


                        <h2 className="checkout_section-title">Shipping Info</h2>
                        <div className="checkout_input-container">
                            <label className="checkout_input-label"> Your Address </label>
                            <input required placeholder="1137 Williams Avenue" className="checkout_input"/>
                        </div>
                        <div className="checkout_input-container">
                            <label className="checkout_input-label"> Zip Code </label>
                            <input inputMode="numeric" maxLength="5" placeholder="10001" className="checkout_input"/>
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
                                <input onChange={() => setPaymentType("e-money")} defaultChecked name="payment-type" required type="radio" className="checkout_radio-input" />
                                <label className="checkout_radio-label">e-Money</label>
                            </div>

                            <div className="checkout_radio-inner-container">
                                <input onChange={() => setPaymentType("cash")} name="payment-type" required type="radio" className="checkout_radio-input"/>
                                <label className="checkout_radio-label">Cash on Delivery</label>
                            </div>
                        </div>
                        {
                            paymentType === "e-money" 
                            ?
                            <div>
                                <div className="checkout_input-container">
                                    <label className="checkout_input-label"> e-Money Number </label>
                                    <input  required inputMode="numeric" pattern="[0-9\s]{13,19}" placeholder="238521993" maxLength="9" className="checkout_input"/>
                                </div>
                                <div className="checkout_input-container">
                                    <label className="checkout_input-label"> e-Money PIN </label>
                                    <input required inputMode="numeric" pattern="[0-9\s]{13,19}" placeholder="6891" maxLength="4" className="checkout_input"/>
                                </div>
                            </div>
                            
                            :
                            <></>
                        }
                </section>
                <CheckoutSummary shoppingCartData={shoppingCart} />
            </form>
        </div>
    )
}

export default Checkout