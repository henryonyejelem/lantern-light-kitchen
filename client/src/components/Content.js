import flowerType1 from "../images/svg/Flower-Type1.svg"
import logo from "../images/pictures/logo/Logo.png"
import DividerAsset from "./assets/dividerAsset";
import "../styles/style.css"

function Content(){
    return(
        <section className="landingPage flex flex-col justify-center text-center">
            <div className="flex justify-center "><img src={logo} alt="logo" style = {{height : "130px"} } /></div>            
            <h3 className="font-Inter font-semibold text-sm text-primary-100 tracking-tighter font-outline-4 mt-2 sm:text-xs fadeIn-2">YOUR EXQUISITE CHINESE CUISINE EXPERIENCE</h3>
            <img src ={flowerType1} alt="flowerType1" style = {{height:20}} className="m-2 fadeIn-2"/>
            <h2 className="font-Scrivano  text-4xl leading-10 font-outline-2 mx-2 sm:text-3xl fadeIn-2">Discover Our Culinary Masterpieces</h2>
            <p className="font-Inter text-base font-light self-center py-3 leading-8 tracking-tight sm:text-[15px] sm:px-1 fadeIn-1" style = {{maxWidth : 780}}>Embark on a gastronomic journey with our menu filled with authentic Chinese delicacies. Our expert
                chefs bring the finest tastes of the East to your table.
            </p>
            <a href="#Menu_ID" className="text-white bg-primary-100 rounded-full text-base m-0 py-1 px-11 font-Inter font-light self-center tracking-tighter sm:text-sm fadeIn-1 hover:bg-[#8B1C11]">what's on our menu</a>   
            <DividerAsset opacity='1'/>
        </section> 
    )
}

export default Content;