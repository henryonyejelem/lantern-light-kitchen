import leafIcon from "../images/svg/Leaf Icon.svg"

import axios from 'axios'
import {useState} from 'react'
import {useUserUpdate} from "../context/UserProvider"

function SignIn(props){
    const [error, setError] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [success, setSuccess] = useState(true);

    const setUpdate = useUserUpdate();
                

    const handleSubmitSignUp = (event) => {
        event.preventDefault();
        const name = {firstName, lastName}
        const checkout = [];
        let success = false;

        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setError('Invalid email address.');
        }
        else{
            axios.post('http://localhost:8000/user/signup', {name, email, password, checkout})
            .then(result => {
                success = (result.data); 
                if(success){
                    props.getEmail(email);
                    props.handler();
                    props.loggedIn();
                    setUpdate(email);
                    window.localStorage.setItem("isLoggedIn", true)
                    window.localStorage.setItem("email", email)                
                }
            })
            .catch(err => console.log(err))
        }
        
    }

    const handleSubmitSignIn = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/user/signin', {email, password})

        .then(result => {           
            setSuccess(result.data);  
            if(result.data){
                props.getEmail(email);
                props.handler();
                props.loggedIn();
                setUpdate(email);
                window.localStorage.setItem("isLoggedIn", true)
                window.localStorage.setItem("email", email)
            }                                        
        })
        .catch(err => console.log(err))
    }

    const clickHandler = event => {
        props.handler();        
    }

    const [isSignIn, setSignIn] = useState(true);

    const signInHandler = event => {
        setSignIn(!isSignIn);
    }    
    
    const signIn = <section className="Sign-In fixed top-0 h-[100vh] w-[100vw] z-40">
                        <div className="relative h-[100%] w-[100%]">
                            <div className="bg-black h-[100%] w-[100%] opacity-25 -z-10" onClick={clickHandler}></div>
                            <div className="absolute h-[80%] w-[40%] min-h-[620px] lg:w-[520px] sm:h-[100vh] sm:w-[100vw] bg-white z-40 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[53px] sm:rounded-none flex justify-center">
                                <div className="w-[75%] flex-col">
                                    <div className="text-center  text-primary-100 text-[33px] mt-[50px] mb-[35px] font-semibold relative">
                                        Sign in
                                        {!success && <div className = "text-primary-100 text-[15px] font-normal absolute top-[60px]">Incorrect Username or Password</div>}
                                    </div>
                                    
                                    <form action="GET" onSubmit={handleSubmitSignIn}>
                                        <div className="flex-col">
                                            <input placeholder="Email or Phone" className="border-[0.1rem] h-[53px] w-[100%] text-[#70707] border-[#707070] rounded-md pl-3" onChange={(e) => setEmail(e.target.value)}/>
                                            <input type="password" placeholder="Password" className="border-[0.1rem] h-[53px] w-[100%] text-[#707070] border-[#707070] rounded-md pl-3 mt-[38px]"  onChange={(e) => setPassword(e.target.value)}/>
                                        </div>
                                        <div className="text-primary-100 text-[14px] font-semibold mt-5">Forgot Password?</div>    
                                        
                                        <button type="submit" className="w-[100%] h-[53px] rounded-full text-white text-[17px] font-semibold bg-primary-100 mt-[30px] sm:mt-[90px]">Sign in</button>               
                                    </form>

                                    <div class="inline-flex items-center justify-center w-full">
                                        <hr class="w-[100%] h-px my-8 bg-[#707070] border-0 dark:bg-gray-700"/>
                                        <span class="absolute px-3 text-[#707070] -translate-x-1/2 bg-white left-1/2 text-center font-semibold">Don't have an account</span>
                                    </div>

                                    <button type="submit" className="w-[100%] h-[53px] rounded-full text-primary-100 text-[17px] font-semibold border-[0.1rem] border-primary-100 mt-[10px]" onClick={signInHandler}>Sign up</button>
                                    
                                    <div className = "leaf1 flex justify-center w-[100%]"> 
                                        <img src = {leafIcon} className="h-[45px] mt-[25px] bottom-6" alt="leafIcon"/>                            
                                    </div>
                                
                                </div>
                            </div>
                        </div>    
                    </section>

    const signUp =   <section className="Sign-up fixed top-0 h-[100vh] w-[100vw] z-40">
                        <div className="relative h-[100%] w-[100%]">
                            <div className="bg-black h-[100%] w-[100%] opacity-25 -z-10" onClick={clickHandler}></div>
                            <div className="absolute min-h-[80%] w-[40%]  lg:w-[520px] sm:h-[100vh] sm:w-[100vw] bg-white z-40 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[53px] sm:rounded-none flex justify-center">
                                <div className="w-[75%] flex-col">
                                    <div className="text-center  text-primary-100 text-[33px] mt-[31px] mb-[35px] font-semibold">Sign up</div>                                    
                                    
                                    <form action="POST" onSubmit={handleSubmitSignUp}>
                                        {error ? <div className="text-primary-100 text-[15px] font-normal">{error}</div> : true}
                                        <div className="flex-col">
                                            <div className = "flex gap-4">
                                                <input placeholder="First Name" className="border-[0.1rem] h-[53px] w-[100%] text-[#70707] border-[#707070] rounded-md pl-3" onChange={(e) => setFirstName(e.target.value)} required/>
                                                <input placeholder="Last Name" className="border-[0.1rem] h-[53px] w-[100%] text-[#70707] border-[#707070] rounded-md pl-3" onChange={(e) => setLastName(e.target.value)} required/>
                                            </div>
                                            <input placeholder= "Email" className="border-[0.1rem] h-[53px] w-[100%] text-[#707070] border-[#707070] rounded-md pl-3 mt-[26px]" onChange={(e) => setEmail(e.target.value)} required/>
                                            <input type="password" placeholder="Password" className="border-[0.1rem] h-[53px] w-[100%] text-[#707070] border-[#707070] rounded-md pl-3 mt-[26px]" onChange={(e) => setPassword(e.target.value)} required/>
                                        </div>
                                        <button type="submit" className="w-[100%] h-[53px] rounded-full text-white text-[17px] font-semibold bg-primary-100 mt-[30px] sm:mt-[90px]">Sign up</button>               
                                    </form>

                                    <div class="inline-flex items-center justify-center w-full">
                                        <hr class="w-[100%] h-px my-8 bg-[#707070] border-0 dark:bg-gray-700"/>
                                        <span class="absolute px-3 text-[#707070] -translate-x-1/2 bg-white left-1/2 text-center font-semibold">Already have an account</span>
                                    </div>
                                    <button type="submit" className="w-[100%] h-[53px] rounded-full text-primary-100 text-[17px] font-semibold border-[0.1rem] border-primary-100 mt-[10px]" onClick={signInHandler}>Sign in</button>
                                   
                                    
                                    <div className = "leaf1 flex justify-center w-[100%] mt-[20px] mb-[20px]"> 
                                        <img src = {leafIcon} className="h-[45px]" alt="leafIcon"/>                            
                                    </div>
                                
                                </div>
                            </div>
                        </div>   
                    </section>          
   
    
    return(
        isSignIn ? signIn : signUp        
    )
}

export default SignIn