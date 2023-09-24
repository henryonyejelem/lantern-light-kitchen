import logo from "../images/pictures/logo/Logo.png" 
import icon from "../images/svg/Icon.svg" 

function Confirmation(props){
    return(
        <section className="Sign-In fixed top-0 h-[100vh] w-[100vw] z-40">
            <div className="relative h-[100%] w-[100%]">
                <div className="bg-black h-[100%] w-[100%] opacity-50 -z-10"></div>
                <div className="absolute  w-[40%] bg-white z-40 pt-3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[53px] sm:rounded-none flex-col">
                    <img src={logo} alt="Logo" className="h-[120px] mx-auto my-[20px] "/>
                    <div className="text-center mt-[2px]">Thanks for choosing us</div>   

                    <div className="text-center  my-5">{props.name}</div>

                    <div className="text-center font-semibold mb-2">
                    for {props.number} at {props.time}<br/> 
                    {props.date}               
                    </div>
                    
                    <img src={icon} alt="Logo" className="h-[35px] mx-auto my-[20px] "/>

                    <button className="block mx-auto py-3 rounded-full mb-[60px] text-center w-[80%] bg-primary-100 text-white font-semibold text-[16px]" onClick={props.shown}>Continue</button>
                </div>
                
            </div>    
        </section>
    )
}

export default Confirmation