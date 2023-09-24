import image from "../images/pictures/onlineReservations.jpg"
import design from "../images/svg/Design Pattern.svg"
import ribbon from "../images/svg/Ribbon.svg"
import leaf from "../images/svg/Leaf Type 2.svg"
import headIcon from "../images/svg/Head Icon.svg"
import timeIcon from "../images/svg/Time Icon.svg"
import Confirmation from "./reservationConfirmation"

import { useState } from "react"

import axios from "axios"

function OnlineReservation(){
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [numPeople, setNumPeople] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [desc, setDesc] = useState('');
    const [shown, isShown] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:8000/reservation', {name, number, numPeople, date, time, desc})
        .then(() => (isShown(true)))
    }

    const setShown = () =>{
        isShown(false)
    }

    return(
        <section className="onlineReservations relative pt-[18vh]" id="Reservations_ID">
            {shown && <Confirmation name={name} number={numPeople} time={time} shown={setShown} date={date}/>}
            <img src = {image} alt="reservations" style = {{height : "35vh", width : "100%", objectFit : "cover", filter: "brightness(0.6)"}} className="absolute -z-40 top-[-10px]"/>

            <div className="relative">
                <div className="bg-primary-100 rounded-3xl block mx-auto w-[70%] sm:w-[100%] sm:rounded-none py-3"> 
                    <div className = "ribbons relative md:invisible">
                        <img src={ribbon} alt="ribbonImage" className = "h-[150px] absolute right-[5%] top-[30px] 2md:right-[2%]"/>
                        <img src={ribbon} alt="ribbonImage" className = "h-[150px] absolute left-[5%] top-[30px] 2md:left-[2%]"/>
                    </div>
                    <div className="text-center font-Scrivano text-[42px] text-primary-300 h-fit pt-3">Online Reservation</div>
                    <img src={design} alt="designImage" className="mx-auto h-[30px] m-1"/>
                    <div className="text-white text-center pt-2 2md:w-[71%] 2md:mx-auto">Booking request <span className="text-primary-300 ">+210-123-4567</span> or fill out the order form</div>
                    <form onSubmit={handleSubmit}>
                        <div className = "flex gap-[1%] justify-center mt-6 2md:flex-col 2md:items-center 2md:gap-5">
                            <input className = "placeholder-primary-100 text-primary-100 font-semibold pl-7 rounded-md w-[35%] h-[55px] 2md:w-[71%]" placeholder = "Your Name" onChange={(e) => {setName(e.target.value)}}/>
                            <input className = "placeholder-primary-100 text-primary-100 font-semibold pl-7 rounded-md w-[35%] h-[55px] 2md:w-[71%]" placeholder = "Phone Number" onChange={(e) => {setNumber(e.target.value)}}/>
                        </div>

                        <div className = "flex gap-[1%] justify-center mt-6 sm:flex-col sm:items-center sm:gap-5">

                            <div className = "text-primary-100 font-semibold pl-7 rounded-md h-[55px] w-[23%] sm:w-[71%] bg-white flex items-center gap-3">
                                <img src={headIcon} alt="" className="h-[30%]"/>
                                <select className="h-[100%] w-[80%] bg-white" onChange={(e) => {setNumPeople(e.target.value)}}>
                                    <option value="1 guest">1 Person</option>
                                    <option value="2 guest">2 People</option>
                                    <option value="3 guest">3 People</option>
                                    <option value="4 guest">4 People</option>
                                    <option value="More than 5 guest">{">5 People"}</option>
                                </select>
                            </div> 
                   
                            <input type="text"
                            placeholder="MM/DD/YYYY"
                            onFocus={(e) => e.target.type = 'date'}
                            onBlur={(e) => e.target.type = 'text'}
                            className="placeholder-primary-100 font-semibold text-primary-100 pl-7 pr-3 rounded-md h-[55px] w-[23%] sm:w-[71%]"
                            min="2023-01-01" max="2030-12-31"
                            onChange={(e) => {setDate(e.target.value)}}
                            /> 
                            

                            <div className = "text-primary-100 font-semibold pl-7 rounded-md h-[55px] w-[23%] sm:w-[71%] bg-white flex items-center gap-3">
                                <img src={timeIcon} alt="" className="h-[30%]"/>
                                <select className="h-[100%] w-[80%] bg-white" onChange={(e) => {setTime(e.target.value)}}>
                                    <option value="01 : 00 PM">01 : 00 PM</option>
                                    <option value="01 : 45 PM">01 : 45 PM</option>
                                    <option value="02 : 15 PM">02 : 15 PM</option>
                                    <option value="03 : 00 PM">03 : 00 PM</option>
                                    <option value="04 : 30 PM">04 : 30 PM</option>
                                    <option value="05 : 00 PM">05 : 00 PM</option>
                                    <option value="07 : 00 PM">07 : 00 PM</option>
                                    <option value="08 : 00 PM">08 : 00 PM</option>
                                    <option value="08 : 15 PM">08 : 15 PM</option>
                                    <option value="08 : 45 PM">08 : 45 PM</option>
                                    <option value="09 : 30 PM">09 : 30 PM</option>
                                    <option value="10 : 00 PM">10 : 00 PM</option>
                                </select>
                            </div>                           
                        </div>

                        <div className = "flex gap-3 justify-center mt-6 ">
                            <textarea className="rounded-md w-[71%] h-[150px]" onChange={(e) => {setDesc(e.target.value)}}/>
                        </div>
                        
                        <button className = "bg-black text-primary-300 py-5 mt-7 rounded-full font-semibold text-sm w-[71%] mx-auto block" type="submit">BOOK A TABLE</button>
                        
                    </form>
                    <img src = {leaf} alt="leafImage" className="mx-auto block h-[50px] my-5"/>
                </div>
            </div>  

            <div className="text-center my-10">
                <div className="text-primary-100 font-Bagatela font-light text-xl">Still having trouble finding us?</div>
                <button className="text-white bg-primary-100 block mx-auto font-Inter text-xs font-semibold py-3 px-11 mt-4">VIEW IN MAP</button>
            </div>   
                                      
        </section>
    )
}

export default OnlineReservation;

//<input className = "placeholder-primary-100 font-semibold pl-7 rounded-md h-[55px] w-[23%] sm:w-[71%]" placeholder = "1 Person"  onChange={(e) => {setNumPPeople(e.target.value)}}/>
//<input className = "placeholder-primary-100 font-semibold pl-7 rounded-md h-[55px] w-[23%] sm:w-[71%]" placeholder = "DD-MM-YY" onChange={(e) => {setDate(e.target.value)}}/>
//<input className = "placeholder-primary-100 font-semibold pl-7 rounded-md h-[55px] w-[23%] sm:w-[71%]" placeholder = "08 : 00 am" onChange={(e) => {setTime(e.target.value)}}/>