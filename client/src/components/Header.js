import menuIcon from "../images/pictures/Icons/Menu Button.png"
import design from "../images/svg/Leaf Icon.svg"
import close from "../images/svg/Close Button.svg"
import {useState} from 'react'

import SignIn from "./SignIn"

import "../styles/style.css"

function Nav(props){
    let windowLoggedIn = window.localStorage.getItem("isLoggedIn")
    let windowEmail = window.localStorage.getItem("email")

    if(!windowLoggedIn){
        windowLoggedIn = false
        windowEmail = ""
    }

    
    const [shown, isShown] = useState(false);
    const [loggedIn, setIsloggedIn] = useState(windowLoggedIn);// eslint-disable-next-line
    const [email, setEmail] = useState(windowEmail);

    const clickHandler = event => {
        const nav = document.querySelector("#Nav_ID");
        nav.style.transition= "transform 1.2s ease"
        nav.style.transform = "translateX(400px)";

        setTimeout(props.handler, 1200);
    }

    const navHandler = event => {
        if(window.innerWidth < 400){
            const nav = document.querySelector("#Nav_ID");
            nav.style.transition= "transform 1.2s ease"
            nav.style.transform = "translateX(400px)";

            setTimeout(props.handler, 1200);
        }
    }

    const loggedInHandler = event => {
        setIsloggedIn(!loggedIn);
    }

    const signInHandler = event => {
        isShown(!shown)
        window.location.reload()

    };

    const signOutHandler = event => {
        window.localStorage.clear()
        window.location.reload()
    };

    const getEmail = e => {
        setEmail(e);
    }

    return(
        <>
        {shown && <SignIn handler={signInHandler} loggedIn={loggedInHandler} getEmail={getEmail}/>}
        <div className="fixed right-0 top-0 bg-primary-100 z-50 h-[100vh] w-[400px] xs:w-[100vw]" 
        id = "Nav_ID"
        >
            <div className="flex-cols text-center text-white text-2xl font-Scrivano relative pt-8 h-[100%]">
                <img src ={close} alt="closeIcon" className="h-[25px] absolute right-2 top-2" onClick={clickHandler}/>

                <div className="py-3"><a href="#Menu_ID"  className="hover:text-primary-300 nav-item" onClick={navHandler}>Menu</a></div>
                <img src = {design} alt="leafImage" className="block mx-auto h-[30px]"/>
                <div className="py-3"><a href="#OperationsInfo_ID"  className="hover:text-primary-300 nav-item" onClick={navHandler}>Operation Information</a></div>
                <img src = {design} alt="leafImage" className="block mx-auto h-[30px]"/>
                <div className="py-3"><a href="#About_ID"  className="hover:text-primary-300 nav-item" onClick={navHandler}>About</a></div>
                <img src = {design} alt="leafImage" className="block mx-auto h-[30px]"/>
                <div className="py-3"><a href="#Reservations_ID"  className="hover:text-primary-300 nav-item" onClick={navHandler}>Reservations</a></div>
                <div className="absolute bottom-2 w-[100%]">
                    {!loggedIn && <button className = "text-white bg-black rounded-full text-xs py-4 px-[20%] font-Inter font-semibold bottom-0" onClick={event => {isShown(true)}}>SIGN IN</button>}
                    {loggedIn && <button className = "text-white bg-black rounded-full text-xs py-4 px-[20%] font-Inter font-semibold bottom-0" onClick={signOutHandler}>SIGN OUT</button>}
                    <div className="font-Inter text-xs py-3">Copyright &copy; Lantern Light Kitchen 2023</div>
                </div>
            </div>
        </div>
        </>
    )
}

function Header(){
    const [isShown, setIsShown] = useState(false);

    const clickHandler = event => {
        setIsShown(!isShown);
    };

    return(
        <header>
            {isShown && <Nav handler = {clickHandler}/>}             
            <div className = "flex justify-between mx-5 mt-2">
                <div className = "text-primary-100 font-Hypatia font-regular text-3xl self-start">光厨房</div>
                <div className = "flex gap-6"> 
                    <a href="#Reservations_ID" className="text-white bg-primary-100 rounded-full text-xs m-0 py-3 px-7 font-Inter font-semibold self-center sm:invisible hover:bg-[#8B1C11]">BOOK A TABLE</a>
                    <img src={menuIcon} alt="menuButton" className="self-center m-0 p-0" style ={{height : "20px"}} onClick={clickHandler}/>
                </div>
            </div>
        </header>  
    )
}
export default Header;
