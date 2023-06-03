import React, {useState, useRef, useEffect} from "react";
import MonoActPic from '../../assets/images/eventMonoact.JPG';
import NukkadPic from '../../assets/images/eventNukkad.JPG';
import StageActPic from '../../assets/images/eventStage.JPG';
import MimesPic from '../../assets/images/eventMimes.jpg';

const Card = ({dataImage, header}) => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [cardDimensions, setCardDimensions] = useState({width: 0, height: 0});
    const cardRef = useRef();
  
    useEffect(() => {
      setCardDimensions({
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight
      });
    }, []);
  
    const handleMouseMove = (e) => {
      setMouseX(e.pageX - cardRef.current.offsetLeft - cardDimensions.width / 2);
      setMouseY(e.pageY - cardRef.current.offsetTop - cardDimensions.height / 2);
    }
  
    const handleMouseLeave = () => {
      setTimeout(() => {
        setMouseX(0);
        setMouseY(0);
      }, 400);
    }
  
    const cardStyle = {
      transform: `rotateY(${mouseX / cardDimensions.width * 12}deg) rotateX(${mouseY / cardDimensions.height * -12}deg)`
    };
  
    const cardBgTransform = {
      transform: `translateX(${mouseX / cardDimensions.width * -22}px) translateY(${mouseY / cardDimensions.height * -22}px)`
    };
  
    const cardBgImage = {
      backgroundImage: `url(${dataImage})`
    };

    return (
        <div className="card-wrap" 
          onMouseMove={handleMouseMove} 
          onMouseEnter={() => clearTimeout(handleMouseLeave)} 
          onMouseLeave={handleMouseLeave} 
          ref={cardRef}>
          <div className="card" style={cardStyle}>
            <div className="card-bg" style={{...cardBgTransform, ...cardBgImage}}></div>
            <div className="card-info">
              <h1>{header}</h1>
            </div>
          </div>
        </div>
      )
}  

export function Cards(props){
    return(
        <div className="container">
            <Card dataImage={MonoActPic}
            header="Mono Act" />
            <Card dataImage={NukkadPic}
            header="Street Play" />
            <Card dataImage={StageActPic}
            header="Stage Act" />
            <Card dataImage={MimesPic}
            header="Mimes" />
        </div>
    );
};