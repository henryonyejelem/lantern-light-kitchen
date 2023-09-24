import flowerType2 from "../../images/svg/Flower-Type2..svg"
import "../../styles/style.css"

function DividerAsset(props){
    const imageWidth = 30;
    const windowSize = window.screen.width;


    const n = windowSize/imageWidth;
    const flower = new Array(Math.floor(n-1)).fill()    
    

    return(
        <div className="flex mt-5 gap-2 px-2 justify-center opacity-fade">{flower.map(icon=>(<img src = {flowerType2} alt = "flowerType2" style={{opacity:props.opacity}}/>))}</div>
    )
}

export default DividerAsset