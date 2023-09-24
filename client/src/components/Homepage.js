import Header from "./Header.js";
import Content from "./Content.js"
import Gallery from "./Gallery.js"
import OperationInfo from "./OperationInfo.js";
import About from "./About.js";
import Menu from "./Menu.js";
import OnlineReservation from "./OnlineReservation.js";
import Footer from "./Footer.js";


function Homepage(){
    return(
        <>
            <Header/>
            <Content/>  
            <Gallery/>
            <OperationInfo/>  
            <About />
            <Menu />  
            <OnlineReservation/>  
            <Footer/>
        </>
    )
}

export default Homepage;