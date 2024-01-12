import "../styles/CheckoutSummary.css"

function CheckoutSummary(props) {

    const shoppingCartData = props.shoppingCartData
    const options = { style: 'currency', currency: 'USD', maximumSignificantDigits: 5  };
    let formatter = new Intl.NumberFormat('en-US', options);

    function caclTotals() {
        let total = 0
        let shipping = 50
        let vat = 0
        let grandTotal = 0
        for(let i = 0; i < shoppingCartData.length; i++) {
            total += (shoppingCartData[i].price * shoppingCartData[i].count)
        }
        vat = Math.round((total * .20))
        grandTotal = total + shipping

        return {total, shipping, vat, grandTotal}
    }

    function renderSummaryElements() {
        let summaryElements = []
        for(let i = 0; i < shoppingCartData.length; i++) {
            summaryElements.push(
                <div className="checkoutSummary_product-container" key={i}>
                    <div className="checkoutSummary_product-container-inner">
                        <img className="checkoutSummary_product-img" src={`${shoppingCartData[i].picture}`}/>
                        <div>
                            <p className="checkoutSummary_name"> {shoppingCartData[i].shortName} </p>
                            <p className="checkoutSummary_price"> {formatter.format(shoppingCartData[i].price)}</p>
                        </div>
                    </div>
                    <p className="checkoutSummary_count"> x{shoppingCartData[i].count} </p>
                </div>
            )
        }
        return summaryElements
    }


    return (
        <section className="checkoutSummary_container">
            <h1 className="checkoutSummary_title">Summary</h1>
            {renderSummaryElements()}

            <div className="checkoutSummary_price-breakdown-container">
                <p className="checkoutSummary_breakdown-line-title">Total</p>
                <p className="checkoutSummary_breakdown-line-value">{formatter.format(caclTotals().total)}</p>
            </div>

            <div className="checkoutSummary_price-breakdown-container">
                <p className="checkoutSummary_breakdown-line-title">Shipping</p>
                <p className="checkoutSummary_breakdown-line-value">{formatter.format(caclTotals().shipping)}</p>
            </div>

            <div className="checkoutSummary_price-breakdown-container">
                <p className="checkoutSummary_breakdown-line-title">Vat (Included)</p>
                <p className="checkoutSummary_breakdown-line-value">{formatter.format(caclTotals().vat)}</p>
            </div>

            <div className="checkoutSummary_price-breakdown-container checkoutSummary_grand-total-container">
                <p className="checkoutSummary_breakdown-line-title">Grand Total</p>
                <p className="checkoutSummary_breakdown-line-value checkoutSummary_grand-total-text">{formatter.format(caclTotals().grandTotal)}</p>
            </div>
            <button className="shared-btn-style-orange checkout_btn"> Continue & Pay </button>
        </section>
    )
}

export default CheckoutSummary