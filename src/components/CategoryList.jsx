import {Link} from "react-router-dom"
import "../styles/CategoryList.css"

function CategoryList() {
    return (
        <section className="categoryList_container">
            <div className="categoryList_headphones-container categoryList_category"> 
                <img className="categoryList_img categoryList_img-one" src="/assets/shared/desktop/image-category-thumbnail-headphones.png" />
                <h2 className="categoryList_name"> headphones</h2>
                <div className="categoryList_link-container">
                    <Link className="categoryList_link">shop </Link>
                    <svg className="categoryList_svg" xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                        <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/>
                    </svg>
                </div>
            </div>

            <div className="categoryList_speakers-container categoryList_category">
                <img className="categoryList_img categoryList_img-two" src="/assets/shared/desktop/image-category-thumbnail-speakers.png" />
                <h2 className="categoryList_name"> speakers</h2>
                <div className="categoryList_link-container">
                    <Link className="categoryList_link">shop </Link>
                    <svg className="categoryList_svg" xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                        <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/>
                    </svg>
                </div>
            </div>

            <div className="categoryList_earphones-container categoryList_category">
                <img className="categoryList_img categoryList_img-three" src="/assets/shared/desktop/image-category-thumbnail-earphones.png" />
                <h2 className="categoryList_name">earphones</h2>
                <div className="categoryList_link-container">
                    <Link className="categoryList_link">shop </Link>
                    <svg className="categoryList_svg" xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                        <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default CategoryList