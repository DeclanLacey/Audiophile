import {Link} from "react-router-dom"
import "../styles/Homepage.css"


function Homepage() {
    return (
        <div className="homepage_container">
            <div className="homepage_main-img-container">
                <img className="homepage_main-img" src="public/assets/home/mobile/image-header.jpg" />
                <div className="homepage_main-img-text-container">
                    <h2 className="homepage_main-img-subtitle"> new product </h2>
                    <h1 className="homepage_main-img-title"> XX99 mark II <br/> headphones </h1>
                    <p className="homepage_main-img-desc"> Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast. </p>
                    <Link to={""}> 
                        <button className="homepage_main-img-btn"> see product </button>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Homepage