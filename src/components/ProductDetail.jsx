import {Link, useLocation, useNavigate} from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import {ShoppingCartContext} from "./App.jsx"
import CategoryList from "./CategoryList"
import CompanyAbout from "./CompanyAbout"
import ProductCardMini from "./ProductCardMini"
import "../styles/ProductDetail.css"

function ProductDetail() {

    const [productCount, setProductCount] = useState(1)
    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext)

    const location = useLocation()
    const data = location.state
    const navigate = useNavigate()
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

    function handleAddToCart() {
        
        if (checkForItemInCart().itemFound) {

            let newCount = productCount + checkForItemInCart().previousCount

            setShoppingCart(prevState => prevState.filter((_, i) => i === checkForItemInCart.itemIndex))
            setShoppingCart(prevState => {
                return (
                    [
                        ...prevState,
                        {
                            "name": data.name,
                            "price": data.price,
                            "picture": data.image.mobile,
                            "count": newCount
                        }
                    ]
                )
            })

        }else {
            setShoppingCart(prevState => {
                return (
                 [
                     ...prevState,
                     {
                         "name": data.name,
                         "price": data.price,
                         "picture": data.image.mobile,
                         "count": productCount
                     }
                 ]
                ) 
            })
        }
    }

    function checkForItemInCart() {
        let itemFound = false
        let itemIndex
        let previousCount
        for(let i = 0; i < shoppingCart.length; i++) {
            if (shoppingCart[i].name === data.name) {
                itemIndex = i
                itemFound = true
                previousCount = shoppingCart[i].count
            }
        }
        return {itemFound, itemIndex, previousCount}
    }

    function renderInTheBoxElements() {
        let inTheBoxElements = []
        for(let i = 0; i < data.includes.length; i++) {
            inTheBoxElements.push(
                <div key={i} className="productDetail_in-box-inner-container">
                    <p className="productDetail_in-box-quantity">{data.includes[i].quantity}x</p>
                    <p className="productDetail_in-box-item">{data.includes[i].item}</p>
                </div>
            )
        }
        return inTheBoxElements
    }
    
    function renderMiniProductCardElements() {
        let miniProductCardElements = []
        for(let i = 0; i < data.others.length; i++) {
            miniProductCardElements.push(
                <ProductCardMini key={i} data={data.others[i]} />
            )
        }
        return miniProductCardElements
    }

    return (
        <section className="productDetail">
            <p onClick={() => navigate(-1)} className="productDetail_go-back-text">Go Back</p>
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
                <button onClick={handleAddToCart} className="shared-btn-style-orange"> add to cart </button>
            </div>
            
            <div className="productDetail_features-container">
                <h2 className="productDetail_features-title"> Features </h2>
                <p className="productDetail_features-text"> {featureTextFirstHalf}</p>
                <p className="productDetail_features-text">{featureTextSecondHalf}</p>
            </div>

            <div>
                <h2 className="productDetail_in-box-title">in the box</h2>
                <div className="productDetail_in-box-outer-container">
                    {renderInTheBoxElements()}
                </div>
            </div>

            <div className="productDetail_extra-img-container">
                <div>
                    <img src={`.${data.gallery.first.mobile}`} className="productDetail_extra-img" />
                    <img src={`.${data.gallery.second.mobile}`} className="productDetail_extra-img" />
                </div>
                <img src={`.${data.gallery.third.mobile}`} className="productDetail_extra-img"/>
            </div>

            <div className="productDetail_mini-card-container">
                <h2 className="productDetail_mini-card-title">you may also like</h2>
                {renderMiniProductCardElements()}
            </div>

            <CategoryList />
            <CompanyAbout />
        </section>
    )
}

export default ProductDetail