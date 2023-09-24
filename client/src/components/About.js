import backgroundImg from "../images/pictures/about.jpg"
import { motion } from "framer-motion"

function About(){
    return(
        <section className="about relative pt-4" id="About_ID">
                <div className = "absolute content z-40 text-white text-center top-[50%]" style = {{width:"100%", transform:"translate(0%, -50%)"}}>
                    <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, ease: "easeOut", duration: 1 }} 
                    viewport={{ once: true }}               
                    >
                    <h2 className = "font-Scrivano text-4xl font-outline-3 font-outline-white md:text-3xl">
                        A very attractive Chinese restaurant that<br/> 
                        is one of the best in the city
                    </h2>    
                    </motion.div> 

                    <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, ease: "easeOut", duration: 1 }}   
                    viewport={{ once: true }}             
                    > 
                    <div className="flex justify-center"><div className="bg-white rounded-full m-9" style = {{width : 91, height : 7}}/></div>
                                        
                    <p className = "text-sm font-Inter font-semibold leading-8 mx-10 md:text-[13px] sm:text-[13px] sm:leading-7">Lantern Light Kitchen, founded in 1985, is a beloved Chinese restaurant in Chinatown.<br/>
                    The restaurant's mission is to offer an unforgettable dining experience,<br/> 
                    showcasing authentic flavors through diverse regional cuisines.<br/> 
                    Embracing both tradition and innovation, Lantern Light Kitchen continuously innovates its menu<br/> 
                    while preserving the timeless tastes of China.</p>
                    </motion.div> 

                </div>
                
            
            
            <img src = {backgroundImg} alt = "BackgroundImage" style = {{objectFit:"cover", height: "80vh", width: "100%", filter: "brightness(75%)"}} className = "-z-40"/>
        </section>
    )
}


export default About