import socials from "../images/svg/Socials.svg"
import cloud from "../images/svg/Cloud Icon.svg"
function Footer(){
    return(
        <section className="Footer bg-primary-100 relative pb-10" style={{
           
        }}>
            <img src={cloud} alt="cloudIcon" className="absolute top-[50%] left-[2%] sm:invisible" style = {{height:80, transform: "translate(0%, -50%)"}}/>
            <div className="flex justify-between m-auto text-[14px] text-white pt-10 sm:flex-col sm:gap-7" style={{width:"70vw"}}>
                <div className="text-center">
                    <h3 className="font-bold mb-3">VISIT</h3>
                    <p className = "mb-3">
                        123 Main Street<br/>
                        Chinatown, CA 12345
                    </p>

                    <h3 className="font-bold mb-3">TALK</h3>
                    <p>210-123-4567<br/>
                    email@LanternLightKitchen.com</p>
                </div>

                <div className="text-center">
                    <h3 className="font-bold mb-3">RESERVATION</h3>
                    <button className="border-[2px] px-8 py-2 text-xs font-semibold">BOOK YOUR TABLE</button>
                </div>

                <div className="text-center">
                    <h3 className="font-bold mb-3">ABOUT</h3>
                    <p>FAQ</p>
                    <p>Privacy Policy</p>
                    <p>Health & Safety</p>
                </div>

                <div className="text-center">
                    <h3 className="font-bold mb-3">FOLLOW</h3>
                    <img src={socials} alt="socials" style ={{height:25}} className="m-auto"/>

                </div>
            </div>
        </section>
    )
}

export default Footer;
