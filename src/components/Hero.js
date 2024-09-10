import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import doctor from "../images/2147787984.jpg"
import hands from "../images/2149155325.jpg"
import closesupport from "../images/2151231517.jpg"

const Hero = () => {
  const images = [
      {image: hands,
       colour: "#00215E",
       text1 :"the home of quality care.",
       text2: " An affordable service which prioritises the comfort and wellbeing of clients."
      },
      {image: doctor,
        colour: "#00215E",
        text1 :"the home of quality care.",
        text2: " An affordable service which prioritises the comfort and wellbeing of clients."
       },
       {image: closesupport,
        colour: "#00215E",
        text1 :"the home of quality care.",
        text2: " An affordable service which prioritises the comfort and wellbeing of clients."
       },]

  return (
    <Zoom scale={1.4} indicators={false} autoplay={true} arrows={false} pauseOnHover={true} canSwipe={true}>
     
    {images.map((each, index) => (
         <section>
          <div className="   shadow-2xl mx-0" key={index} style={{ width: "100%" }}>
            <img className="brightness-70 "/* style={{ objectFit: "cover", width: "100%" ,height: "60%",}} */ alt="Slide " src={each.image} />
        </div>
            <div className=" overlay mx-1 lg:mx-auto max-w-screen-3xl pt-24 ">
              <h1 class=" text-lg font-extrabold  tracking-tight leading-none md:text-5xl lg:text-6xl"style={{color: each.colour}}>Ultimate Step Support Ltd,</h1>
              <p class=" text-lg font-bold  lg:text-4xl sm:px-2 lg:px-48" style={{color: each.colour}}>
              {each.text1}.
                  
              </p>
              <div class="flex flex-col space-y-4 rounded-lg border-solid border-navcolour sm:flex-row text-left pt-1 lg:pt-5 sm:space-y-0 sm:space-x-0">
                  
                <p className=' py-3  px-1 rounded-lg font-bold  border-navcolour text-1xl lg:text-3xl md:w-1/2' style={{color: each.colour}}>
                {each.text2}
                </p>      
              </div> 
          

          </div>
</section>


        
    ))}


   
</Zoom>
  );
};
export default Hero

