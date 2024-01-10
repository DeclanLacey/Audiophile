import {Link, useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
import "../styles/ProductDetail.css"

function ProductDetail() {

    const [productCount, setProductCount] = useState(1)
    let inTheBoxElements = []

    const location = useLocation()
    const data = location.state
    const shortProductName = data.name.substring(0, data.name.lastIndexOf(" "))
    const featureTextFirstHalf = data.features.match(/^(.*)(.{3})/).slice(1).join('')
    const featureTextSecondHalf = data.features.replace(featureTextFirstHalf, "")


    const options = { style: 'currency', currency: 'USD', maximumSignificantDigits: 5  };
    let formatter = new Intl.NumberFormat('en-US', options);
    let price = formatter.format(data.price)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function increaseProductCount() {
        setProductCount(prevState => prevState + 1)
    }

    function decreaseProductCount() {
        if (productCount === 1) {

        }else {
            setProductCount(prevState => prevState - 1)
        }
    }

    for(let i = 0; i < data.includes.length; i++) {
        inTheBoxElements.push(
            <div key={i} className="productDetail">
                <p>{data.includes[i].quantity}x</p>
                <p>{data.includes[i].item}</p>
            </div>
        )
    }


    return (
        <section className="productDetail">
            <p className="productDetail_go-back-text">Go Back</p>
            <img className="productDetail_product-img" src={`.${data.image.mobile}`} />
            <p className="productDetail_new-product">{data.new ? "new product" : ""}</p>
            <h2 className="productDetail_name">{shortProductName}<br></br> {data.category}</h2>
            <p className="productDetail_desc">{data.description}</p>
            <p className="productDetail_price">{price}</p>
            <div className="productDetail_count-cart-container">
                <div className="productDetail_plus-minus-container">
                    <button onClick={decreaseProductCount} className="productDetail_minus">-</button>
                    <p className="productDetail_product-count">{productCount}</p>
                    <button onClick={increaseProductCount} className="productDetail_plus">+</button>
                </div>
                <button className="productDetail_add-cart-btn"> add to cart </button>
            </div>
            
            <div>
                <h2> Features </h2>
                <p> {featureTextFirstHalf}</p>
                <p>{featureTextSecondHalf}</p>
            </div>

            <div>
                {inTheBoxElements}
            </div>

        </section>
    )
}

export default ProductDetail