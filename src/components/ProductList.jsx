import { useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
import CategoryList from "./CategoryList"
import CompanyAbout from "./CompanyAbout"
import ProductCard from "./ProductCard"
import fullProductData from "../data.json"
import "../styles/ProductList.css"

function ProductList() {

    const [categoryProducts, setCategoryProducts] = useState([])
    const location = useLocation()
    const category = location.state.category
    let productElements = []

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [category])

    useEffect(() => {
        let tempData = []
        for (let i = 0; i < fullProductData.length; i++) {
            if (fullProductData[i].category === category) {
                tempData.push(fullProductData[i])
            }
        }
        setCategoryProducts(tempData)
        
    }, [category])

    for (let i = categoryProducts.length - 1; i >= 0; i--) {
        productElements.push(<ProductCard key={categoryProducts[i].id} data={categoryProducts[i]} />)
    }

    return (
        <section>
            <div className="ProductList_category-header-container">
                <h1 className="ProductList_category-header"> {category}</h1>
            </div>
            {productElements}
            <div className="spacer"></div>
            <CategoryList />
            <CompanyAbout />
        </section>
    )
}

export default ProductList