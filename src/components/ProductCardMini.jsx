import {Link} from "react-router-dom"
import "../styles/ProductCardMini.css"

function ProductCardMini(props) {

    const data = props.data

    return (
        <section className="productCardMini">
            <img className="productCardMini_img" src={`.${data.image.mobile}`} />
            <h1 className="productCardMini_name"> {data.name}</h1>
            <Link><button className="shared-btn-style-orange"> see product </button></Link>
        </section>
    )
}

export default ProductCardMini