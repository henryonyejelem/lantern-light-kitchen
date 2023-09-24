import lantern from "../images/svg/Lantern Icon2.svg"
import add from "../images/svg/Add Button.svg"
import remove from "../images/svg/Remove Button.svg"
import back from "../images/svg/Back Button.svg"
import flower from "../images/svg/Flower-Type2..svg"

import {useState, useEffect} from "react"
import axios from "axios"
import {useUser} from "../context/UserProvider"

import { Link } from "react-router-dom"

import Confirmation from "./PaymentConfirmation.js"

function CheckoutItem(props){
    const user = useUser();
   

    const increment = (event) => {
        const itemName = props.name
        axios.put('http://localhost:8000/checkout/' + user.email + '/increment', {itemName})
        .then(result => {
            props.updateCount(props.index, 1)
        })

    }
    const decrement = (event) => {
        const itemName = props.name
        axios.put('http://localhost:8000/checkout/' + user.email + '/decrement', {itemName})
        .then(result => {
            if(props.count-1 < 1){
                axios.put('http://localhost:8000/checkout/' + user.email + '/delete', {itemName})
            }
            props.updateCount(props.index, -1)
        })
    }
    
    return(
        <div className="my-[18px] flex justify-between pr-[15px] items-start">
            <div>
                <div className="text-[18px] font-bold xs:text-[16px] xs:max-w-[180px]">{props.count> 1 && props.count} {props.name}</div> 
                <div className="text-[14px] md:max-w-[65vw] xs:text-[12px] xs:max-w-[180px]">
                    {props.description}
                </div>  
            </div>    

            <div className="flex items-center gap-2">
                <div className="font-semibold tracking-tight text-[16px] sm:text-[13px]">${Number(props.price).toFixed(2)}</div>
                <img src={add} alt="addButton" className="h-[25px]" onClick={increment}/>
                <img src={remove} alt="addButton" className="h-[25px]" onClick={decrement}/>            
            </div>  
        </div>
    )
}

function CheckoutList(props){
    const items = props.db

    return( 
        <div className="flex-col max-h-[70vh] 2xl:max-h-[55vh] overflow-scroll">
            {items.map((item, index) => 
                (   
                    item.count > 0 &&  
                    <>  
                        <CheckoutItem name={item.name} description={item.description} price={item.price} count={item.count} index={index} updateCount={props.updateCount}/>
                        <hr className="border-t-[0.175rem]"/>
                    </>
                )
            )}
        </div>   
    )
}

function PaymentForm(props){
    const [shown, isShown] = useState(false)

    

    const delivery = props.delivery;

    const totalPrice = delivery ? (props.price + (props.price * 0.1) + 9.50) : (props.price + (props.price * 0.1))  

    const handlePaymentSubmit = (event) =>{
        event.preventDefault();    
        console.log("Payment")  
        
        axios.post('http://localhost:8000/checkout/' + props.email + '/payment')
        .then(()=>{
            isShown(true)
        })
    }

    return(
        <> 
        {shown && <Confirmation/>}
        <div className="w-[33vw] md:w-[100vw]">
            <div className=" mr-[30px] border-[0.075rem] border-[#707070] p-4 rounded-[1.25rem] md:mr-0 md:border-none">
                <img src={flower} className="block mx-auto h-[35px]" alt=""/>
                <div className="flex justify-between text-[13px] font-bold text-[#707070] my-1"> 
                    <div>Subtotal</div>
                    <div>${Number(props.price).toFixed(2)}</div>
                </div>

                <div className="flex justify-between text-[13px] font-bold text-[#707070] my-1"> 
                    <div>Taxes</div>
                    <div>${ Number(props.price * 0.09).toFixed(2)}</div>
                </div>

                {delivery &&
                    <div className="flex justify-between text-[13px] font-bold text-[#707070] my-1"> 
                        <div>Delivery</div>
                        <div>$9.50</div>
                    </div>
                }

                <div className="flex justify-between text-[13px] font-bold text-black my-5"> 
                    <div>Order Total</div>
                    <div>${Number(totalPrice).toFixed(2)}</div>
                </div>

                <hr className="border-t-[0.125rem]"/>                

                <form className="my-3" onSubmit={handlePaymentSubmit}>  
                    <div className="text-[10px] font-bold text-[#707070] mb-2">CONTACT</div>             
                    <input className="w-[100%] bg-[#D5D5D5] rounded-[0.3rem] py-1 pl-2 text-[14px] placeholder:text-black placeholder:opacity-30" placeholder="Email Address"/>
                    <div className="flex mt-2 gap-2">
                        <input className="w-[100%] bg-[#D5D5D5] rounded-[0.3rem] py-1 pl-2 text-[14px] placeholder:text-black placeholder:opacity-30" placeholder="First Name"/>
                        <input className="w-[100%] bg-[#D5D5D5] rounded-[0.3rem] py-1 pl-2 text-[14px] placeholder:text-black placeholder:opacity-30" placeholder="Last Name"/>
                    </div>

                    {delivery && <>
                    <hr className="border-t-[0.125rem] mt-6"/>
                    <div className="text-[10px] font-bold text-[#707070] mt-2">ADDRESS</div>
                    <input className="w-[100%] bg-[#D5D5D5] rounded-[0.3rem] py-1 pl-2 text-[14px] placeholder:text-black placeholder:opacity-30 mt-2" placeholder="Street Adress"/>
                    <div className="flex mt-2 gap-2">
                        <input className="w-[100%] bg-[#D5D5D5] rounded-[0.3rem] py-1 pl-2 text-[14px] placeholder:text-black placeholder:opacity-30" placeholder="Town/City"/>
                        <input className="w-[100%] bg-[#D5D5D5] rounded-[0.3rem] py-1 pl-2 text-[14px] placeholder:text-black placeholder:opacity-30" placeholder="State"/>
                    </div>
                    <input className="w-[50%] bg-[#D5D5D5] rounded-[0.3rem] py-1 pl-2 text-[14px] placeholder:text-black placeholder:opacity-30 mt-2" placeholder="Zip Code"/>
                    </>}

                    <hr className="border-t-[0.125rem] mt-6 mb-4"/>
                    
                    <input className="w-[100%] bg-[#C7CEDA] bg-opacity-40 rounded-[0.3rem] py-2 pl-2 text-[14px] placeholder:text-black placeholder:opacity-30" placeholder="Card Number"/>

                    <hr className="border-t-[0.125rem] my-4"/>
                    
                    <button type="submit" className="text-center w-[100%] bg-primary-100 rounded-full text-[14px] text-white font-semibold py-1">Pay ${Number(totalPrice).toFixed(2)}</button>

                </form>
            </div>
        </div></>
    )
}

function Checkout(){    
    const [delivery, setDelivery] = useState(false)
    const [db, setDB] = useState([])

    const user = useUser();

    useEffect(() => {              
        axios.get('http://localhost:8000/checkout/' + user.email)
        .then(result => { 
            setDB(result.data)       
        })
        .catch(err => console.log(err))// eslint-disable-next-line
    }, [])

    const clickHandler = event => {
        setDelivery(!delivery);
    }   
    
    const updateCount = (index, inc) => {
        const temp = db.map((item, i) => {
            if(index === i){
                let t = item;
                t.count = t.count+inc
                return (t)
            }
            else{
                return (item)
            }
        })        
        setDB(temp)    
    }

    let totalPrice = 0;// eslint-disable-next-line
    db.map(item => {
        totalPrice = totalPrice + (item.price*item.count);
    })

    return(
        <section className="Checkout relative h-[100vh]">
            <img src ={lantern} alt="" className="absolute left-[50%] translate-x-[-50%] h-[100px]"/>
            <div className="flex justify-between pt-[90px] md:flex-col md">
                <div className="w-[59vw] ml-[70px] md:w-[100vw] md:ml-1">
                    <div className="text-[25px] font-semibold mb-[25px]">Checkout</div>
                    <CheckoutList db = {db} updateCount={updateCount}/>
                </div>
                <PaymentForm delivery={delivery} price={totalPrice} email={user.email}/>
            </div> 

            <div className="absolute bottom-[40px] md:relative">
                <div className="ml-[70px] mt-[30px] flex gap-3 md:mx-3 md:justify-between">
                    {
                        delivery ?
                        <>
                        <button className=" w-[180px] rounded-full md:w-[50%] text-black text-[16px] py-2 font-semibold border-[0.1rem] border-black" onClick={clickHandler}>Pickup</button>
                        <button className=" w-[180px] rounded-full md:w-[50%] text-white text-[16px] py-2 font-semibold border-[0.1rem] bg-black" >Delivery</button>
                        </>
                        :                        
                        <>
                        <button className=" w-[180px] md:w-[50%] rounded-full text-white text-[16px] py-2 font-semibold border-[0.1rem] bg-black">Pickup</button>
                        <button className=" w-[180px] md:w-[50%] rounded-full text-black text-[16px] py-2 font-semibold border-[0.1rem] border-black" onClick={clickHandler}>Delivery</button>
                        </>

                    }
                </div> 

                <Link to ="/"><img src={back} className="ml-[70px] mt-[30px] h-[40px] md:ml-5" alt=""/></Link>
            </div> 
        </section>        
    )
}

export default Checkout;