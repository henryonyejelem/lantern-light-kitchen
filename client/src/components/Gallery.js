
import '../styles/style.css'
import noodles from "../images/pictures/noodles.jpg"
import chefsRecom from "../images/pictures/chefsRecom.jpg"
import appetizer from "../images/pictures/appetizers.jpg"
import soup from "../images/pictures/soup.jpg"
import sushi from "../images/pictures/sushi.jpg"
import dessert from "../images/pictures/dessert.jpg"


function Gallery(){
    var direction;
    var timer;
    function leftRepeater(){
        slideCarouselLeft();
        timer = setInterval(slideCarouselLeft, 1700);
    } 
    function rightRepeater(){
        slideCarouselRight();
        timer = setInterval(slideCarouselRight, 1700);
    }
    function clear(){
        clearInterval(timer);
    }    
    function slideCarouselLeft(){
        direction = -1;
        const slider = document.querySelector('.slider'); 
        slider.style.transform = 'translate(-75vw)';
    }
    function slideCarouselRight(){
        direction = 1;
        const slider = document.querySelector('.slider');
        slider.style.transition = 'none';
        slider.prepend(slider.lastElementChild);
        slider.style.transform = 'translate(-75vw)';

        setTimeout(function(){
            slider.style.transition = 'transform 1.5s';
            slider.style.transform = 'translate(-25vw)';
        });
    }
    const sliderReset = (event) => {
        const slider = document.querySelector('.slider');

        if(direction === -1){        
            slider.appendChild(slider.firstElementChild);
            slider.style.transition = 'none';
            slider.style.transform = 'translate(-25vw)';

            setTimeout(function(){
                slider.style.transition = 'transform 1.5s';
            })
        }        
    }
    return(    
            <section className="menuGallery mt-3 fadeIn-3 sm:overflow-scroll">
                <div className="slider" onTransitionEnd = {sliderReset}>
                    <div className="itemImg">
                        <img src={appetizer} alt="AppetizerImage" style = {{height : "60vh"}}/>
                        <div className="z-40 Inter text-white text-2xl font-semibold text-center bottom-7 leading-9">
                            Appetizer<br/>
                            <p className='text-xl'>开胃菜</p>
                        </div>
                    </div>                    
                    <div className="itemImg">
                        <img src={noodles} alt="NoodlesImage" style = {{height : "60vh"}}/>
                        <div className="z-40 Inter text-white text-2xl font-semibold text-center bottom-7 leading-9">
                            Noodles<br/>
                            <p className='text-xl'>面</p>
                        </div>
                        
                    </div>
                    <div className="itemImg">
                        <img src={chefsRecom} alt="ChefsRecommendationImage" style = {{height : "60vh"}}/>
                        <div className="z-40 Inter text-white text-2xl font-semibold text-center bottom-7 leading-9">
                            Chef's Recommendation<br/>
                            <p className='text-xl'>厨师推荐</p>
                        </div>
                    </div>
                    <div className="itemImg">
                        <img src={soup} alt="SoupImage" style = {{height : "60vh"}} loading = "lazy"/>
                        <div className="z-40 Inter text-white text-2xl font-semibold text-center bottom-7 leading-9">
                            Soup<br/>
                            <p className='text-xl'>寿司</p>
                        </div>
                    </div>
                    <div className="itemImg">
                        <img src={sushi} alt="SushiImage" style = {{height : "60vh"}}/>
                        <div className="z-40 Inter text-white text-2xl font-semibold text-center bottom-7 leading-9">
                            Sushi<br/>
                            <p className='text-xl'>汤</p>
                        </div>
                    </div>
                    <div className="itemImg">
                        <img src={dessert} alt="DessertImage" style = {{height : "60vh"}}/>
                        <div className="z-40 Inter text-white text-2xl font-semibold text-center bottom-7 leading-9">
                            Dessert<br/>
                            <p className='text-xl'>甜点</p>
                        </div>
                    </div>
                    
                </div>

                <div className='prev absolute left-0 sm:invisible'     
                    onMouseOver = { rightRepeater }    
                    onMouseOut = { clear }                
                ></div>
                <div className='next absolute right-0 sm:invisible' 
                    onMouseOver = {leftRepeater}    
                    onMouseOut = { clear }                   
                ></div> 
            </section>
            
    )
}
export default Gallery;