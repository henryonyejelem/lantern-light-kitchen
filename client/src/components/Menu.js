import leafIcon from "../images/svg/Leaf Icon.svg"
import bamboo from "../images/svg/Bamboo Icon.svg"
import border1 from "../images/svg/Border Icon.svg"
import border2 from "../images/svg/Border Icon 2.svg"
import lantern from "../images/svg/Lantern Icon.svg"
import cart from "../images/pictures/Icons/Cart Icon.png"

import "../styles/style.css"

import {useState, useEffect} from 'react'
import axios from "axios"
import SignIn from "./SignIn.js"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function MenuItem(props){   
    let section;
    let image;

    const clickHandler = event => {
        let route;
        if(props.option === "chef"){
            route = "chef";            
        }
        else{
            route = "menu";
        }

        if(props.loggedIn){
            let email = props.email;
            let itemName = props.name
            axios.put('http://localhost:8000/user/checkout/' + route + '/' + itemName, {email})
            .then(result=>{
                props.setNumItems();
            })            
        }
    }

    if(props.option === "chef"){
        if(props.path){
            let source = props.path
            image = require(`../images/pictures/Menu Items/${source}`);   
        }          
        section =   <div className="flex items-center gap-5" onClick ={clickHandler}>
                        <img src = {image} alt = {props.name} className="h-[90px] lg:h-[80px] sm:h-[70px]"/>
                        <div className="flex flex-col gap-2">
                            <div className="flex w-[28vw] justify-between items-start lg:w-[45vw] sm:w-[60vw]">
                                <div className="food-name chef font-Scrivano text-[20px] text-primary-300 max-w-[230px] inline-block w-auto sm:text-[18px]">
                                    {props.name}
                                </div>
                                <div className="font-Scrivano text-[17px] text-primary-300 sm:text-[18px]">${ Number(props.price).toFixed(2) }</div>
                            </div>
                            <div className="w-[20vw] text-[15px] text-white lg:w-[40vw] sm:text-[14px] sm:w-[50vw]">
                                {props.desc}
                            </div>
                        </div>
                    </div>
    }

    else{
        section =   <div className="flex items-start gap-5 my-0" onClick ={clickHandler}>
                        <div className="flex flex-col gap-2">
                            <div className="flex w-[34vw] justify-between items-start lg:w-[60vw]">
                                <div className="food-name font-Scrivano text-[20px] text-primary-300 max-w-[200px] inline-block w-auto">
                                    {props.name}
                                </div>
                                <div className="font-Scrivano text-[17px] text-primary-300">${ Number(props.price).toFixed(2) }</div>
                            </div>
                            <div className="w-[35vw] text-[15px] text-white lg:w-[45vw]">
                                {props.desc}
                            </div>
                        </div>
                    </div>
    }

    return(
        <>
            <motion.section 
            whileHover={{
                scale: 0.95,
                transition: { duration: 0.25 },
            }}
            whileTap={{ scale: 0.9 }}
            >
            {section}
            </motion.section>
        </>
    )
}

function MenuList(props){
    const [db, setDB] = useState([]);
    let url;
    if(props.option === "chef"){
        url =  "http://localhost:8000/" + props.option;
    }

    else{
        url = "http://localhost:8000/menu/" + props.option;
    }

    
    useEffect(() => {              
        axios.get(url)
        .then(result => {
            setDB(result.data);
        })
    }, [url])


    return(
        <>  
            <div className="flex w-[77vw] flex-wrap justify-between mb-[120px] mx-auto min-h-[52vh] lg:flex-col lg:items-center lg:gap-6 lg:mt-4 sm:w-[88vw] z-40">
                {db.map(item => ( <MenuItem name = {item.name} desc = {item.description} price = {item.price} path = {item.imagePath} option = {props.option} setNumItems = {props.setNumItems} loggedIn = {props.loggedIn} email = {props.email}/> ))}                            
            </div>
        </>        
    )
}

function Menu(){
    let windowLoggedIn = window.localStorage.getItem("isLoggedIn")
    let windowEmail = window.localStorage.getItem("email")

    if(!windowLoggedIn){
        windowLoggedIn = false
        windowEmail = ""
    }

    const [option, setOption] = useState('chef');
    const [shown, isShown] = useState(false);
    const [loggedIn, setIsloggedIn] = useState(windowLoggedIn);
    const [numItems, setNumItems] = useState(0);
    const [email, setEmail] = useState(windowEmail);

    
    useEffect(() =>
        {
            if(loggedIn){
                let count = 0;
                axios.get('http://localhost:8000/checkout/' + email)
                .then(result => { 
                    const data = result.data  
                    data.map(item => (count = count + item.count))   
                    setNumItems(count) 
                })
                .catch(err => console.log(err))
            }// eslint-disable-next-line
        },[]
        
    )

    const clickhandler = (id) => {
        const temp = document.querySelector('.active');
        temp.classList.remove('active');
        const element = document.querySelector(`#${id}`);
        element.classList.add('active');    
    }

    const signInHandler = event => {
        isShown(!shown);
    };

    const loggedInHandler = event => {
        setIsloggedIn(!loggedIn);
    }

    const getEmail = e => {
        setEmail(e);
    }

    const numHandler = event => {
        setNumItems(numItems+1);
    }

    const optionHandler = () => {
        setOption("chef");
    }

    return(
        <section className="menu relative" id="Menu_ID">
            {shown && <SignIn handler={signInHandler} loggedIn={loggedInHandler} getEmail={getEmail}/>}            

            <div className="menuHeader flex justify-between pt-5 px-10 items-center sm:px-2 2xs:px-1">
                <div className = " font-Inter flex gap-5 sm:gap-2">
                    <h3 className = "text-base text-primary-100 sm:text-[16px] 2xs:text-[14px]">Pickup</h3>
                    <button className="border-[0.082rem] border-gray-600 text-[12px] font-light px-4 rounded-full sm:text-[10px] xs:px-3 2xs:text-[10px]">10-15mins</button>
                    <h3 className = "text-base text-primary-100  sm:text-[16px] 2xs:text-[14px]">Delivery</h3>
                    <button className="border-[0.082rem] border-gray-600 text-[12px] font-light px-4 rounded-full sm:text-[10px] xs:px-3 2xs:text-[10px]">40-50mins</button>                    
                </div>
                {
                    !loggedIn ?
                    <button className = "text-white bg-primary-100 rounded-full text-xs m-0 py-3 px-9 font-Inter font-semibold self-center sm:text-[9px] sm:py-2 xs:text-[9px] xs:px-6 2xs:text-[9px] hover:bg-[#8B1C11]" onClick={signInHandler}>SIGN IN</button>
                    : (numItems > 0 ? 
                    
                    <Link to="/checkout" target="_blank"><button className = "text-white bg-primary-100 rounded-full text-xs m-0 py-3 px-6 font-Inter font-semibold self-center sm:text-[9px] sm:py-2 xs:text-[9px] 2xs:text-[9px] hover:bg-[#8B1C11] flex gap-2 items-center xs:gap-1 xs:px-3">
                        {numItems} ITEMS
                        <img src = {cart} className="h-[20px] sm:h-[15px] xs:h-[12px]" alt = "CartImage"></img>
                    </button></Link>  
                    :
                    <button className = "text-white bg-primary-100 rounded-full text-xs m-0 py-3 px-6 font-Inter font-semibold self-center sm:text-[9px] sm:py-2 xs:text-[9px] 2xs:text-[9px] hover:bg-[#8B1C11] flex gap-2 items-center xs:gap-1 xs:px-3">
                        0 ITEMS
                        <img src = {cart} className="h-[20px] sm:h-[15px] xs:h-[12px]" alt = "CartImage"></img>
                    </button> 
                    )                
                }
            </div>
            <div className="pt-7 pb-5 menuOptions gap-[5vw] flex justify-center text-[12px] font-Inter font-semibold md:text-[10px] md:gap-[3vw] sm:text-[8px] sm:font-semibold" >
                <div onClick = { () => { setOption('chef'); clickhandler("chef")} } className="active" id = "chef">CHEF'S RECOMMENDATION</div>
                <div onClick = { () => { setOption('appetizer'); clickhandler("appetizer") } } id = "appetizer">APPETIZERS</div>
                <div onClick = { () => { setOption('soup'); clickhandler("soup") } } id = "soup">SOUP</div>
                <div onClick = { () => { setOption('sushi'); clickhandler("sushi") } } id = "sushi">SUSHI</div>
                <div onClick = { () => { setOption('rice'); clickhandler("rice") } } id = "rice">RICE & NOODLES</div>
                <div onClick = { () => { setOption('dessert'); clickhandler("dessert") } } id = "dessert">DESSERT</div>
            </div>

            <div className="relative bg-primary-100" >
                <div>
                    <img src = {border2} alt="borderIcon" className="absolute right-3 h-[80px] top-3 sm:h-[65px]"/>
                    <img src = {border1} alt="borderIcon" className="absolute left-3 h-[80px] bottom-3 sm:h-[65px]"/>
                </div>

                <div>
                    <img src = {lantern} alt = "lantern" className="mx-auto sm:h-[100px]"/>
                </div>

                <MenuList option = {option} setNumItems = {numHandler} loggedIn = {loggedIn} email = {email} setoption = {optionHandler}/>

                <div className = "leaf1 flex"> 
                    <img src = {leafIcon} className="h-[80px] absolute left-[5%] top-[80px] md:invisible" alt="leafIcon"/>
                    <img src = {leafIcon} className="h-[80px] absolute right-[5%] top-[80px] md:invisible" alt="leafIcon"/>
                </div>

                <div className = "bamboo flex">  
                    <img src = {bamboo} className="absolute h-[70px] top-[50%] left-[7%] transform translate-y-[-50%] md:invisible" alt="bamboo"/>
                    <img src = {bamboo} className="absolute h-[70px] top-[50%] right-[7%] transform translate-y-[-50%] md:invisible" alt="bamboo"/>
                </div>

                <div className = "leaf1 flex"> 
                    <img src = {leafIcon} className="h-[80px] absolute left-[5%] bottom-[80px] md:invisible" alt="leafIcon"/>
                    <img src = {leafIcon} className="h-[80px] absolute right-[5%] bottom-[80px] md:invisible" alt="leafIcon"/>
                </div>
            </div>
        </section>
    )
}

export default Menu;

