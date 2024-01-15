import { useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
import CategoryList from "./CategoryList"
import CompanyAbout from "./CompanyAbout"
import ProductCard from "./ProductCard"
import fullProductData from "../data.json"
import "../styles/ProductList.css"
import { render } from "react-dom"

function ProductList() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const [categoryProducts, setCategoryProducts] = useState([])
    const location = useLocation()
    const category = location.state.category
    let productElements = []

    /// count that is passed to the ProductCard that helps decide flex order
    let count = 0

    useEffect(() => {
        setCurrentCategoryData()
    }, [category])

    //// sets the data for the current category
    function setCurrentCategoryData() {
        let tempData = []
        for (let i = 0; i < fullProductData.length; i++) {
            if (fullProductData[i].category === category) {
                tempData.push(fullProductData[i])
            }
        }
        setCategoryProducts(tempData)
    }

    /// renders all of the products in the current category
    function renderCategoryProducts() {
        for (let i = categoryProducts.length - 1; i >= 0; i--) {
            count++
            productElements.push(<ProductCard key={categoryProducts[i].id} itemNum={count} data={categoryProducts[i]} />)
        }
        return productElements
    }

    return (
        <section>
            <div className="ProductList_category-header-container">
                <h1 className="ProductList_category-header"> {category}</h1>
            </div>
            {renderCategoryProducts()}
            <div className="spacer"></div>
            <CategoryList />
            <CompanyAbout />
        </section>
    )
}

export default ProductList