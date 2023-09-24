import asset from "../../images/svg/Side Design.svg"

function DesignAsset(){
    return(
        <>
            <div className = "flex justify-between px-10 mt-[350px]" style={{width : "100vw"}}>
                <img src={asset} alt="SideDesign" style={{height : 600}}/>
                <img src={asset} alt="SideDesign" style={{height : 600}}/>
            </div>
        </>
    )
}

export default DesignAsset;