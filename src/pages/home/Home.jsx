import Header from "../../components/header/header"
import Navbar from "../../components/navbar/navbar"
import Featured from "../../components/featured/Featured"
import "./home.css"
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from "../../components/featured2/FeaturedProperties"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

const Home = () => {
return(
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
            <Featured/>
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList/>
            <h1 className="homeTitle">Homes guests love</h1>
            <FeaturedProperties/>
            <MailList/>
            <Footer/>
        </div>
    </div>
    )
}

export default Home;