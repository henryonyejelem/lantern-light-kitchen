import DividerAsset from "./assets/dividerAsset";
import flowerType1 from "../images/svg/Flower-Type1.svg"
import '../styles/style.css'

function OperationInfo(){
    return(
        <section className="operationInfo" id="OperationsInfo_ID">
            <DividerAsset opacity = '0.37'/>
            <div className="Inter font-light text-sm p-10 justify-center text-center">                
                <p className="font-semibold text-primary-100 text-xl inline-block locationInf my-3 info relative sm:text-base">Location</p>
                <p>123 Main Street<br/>
                Chinatown CA 12345
                </p>

                <div className="flex justify-center"><img src ={flowerType1} alt="flowerType1" style = {{height:20}} className="my-4"/></div>

                <p className="font-semibold text-primary-100 text-xl hoursInfo inline-block mb-3 info relative sm:text-base">Hours</p>
                <p>
                Mon-Fri 11:00AM-9:00PM<br/>
                Sat 11:00 AM - 10:00PM<br/>
                Sun 12:00 PM - 8:00PM<br/>
                </p>
            </div>
            <DividerAsset opacity = '0.37'/>
        </section>
    )
}
export default OperationInfo;
