import logo from "../images/pictures/logo/Logo.png" 
import icon from "../images/svg/Icon.svg" 
import {useUser} from "../context/UserProvider"
import { Link } from "react-router-dom"

function Confirmation(){
    const user = useUser()
    return(
        <section className="Sign-In fixed top-0 h-[100vh] w-[100vw] z-40">
            <div className="relative h-[100%] w-[100%]">
                <div className="bg-black h-[100%] w-[100%] opacity-50 -z-10"></div>
                <div className="absolute  w-[40%] bg-white z-40 pt-3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[53px] sm:rounded-none flex-col">
                    <img src={logo} alt="Logo" className="h-[120px] mx-auto my-[20px] "/>
                    <div className="text-center my-[2px]">Thanks for choosing us</div>   
                    <div className="text-center">Your order is being processed</div>

                    <div className="text-center mt-[30px] mb-2">Confirmation has been sent to you email</div>
                    <div className="text-center font-bold">{user.email}</div>
                    <img src={icon} alt="Logo" className="h-[35px] mx-auto my-[20px] "/>

                    <Link to="/"><button className="block mx-auto py-3 rounded-full mb-[60px] text-center w-[80%] bg-primary-100 text-white font-semibold text-[16px]">Continue</button></Link>
                </div>
                
            </div>    
        </section>
    )
}

export default Confirmation