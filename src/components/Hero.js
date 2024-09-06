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
          <div className=" rounded-lg  border-1 shadow-2xl mx-auto" key={index} style={{ width: "100%" }}>
            <img className="brightness-70 object-scale-down rounded-lg"style={{ objectFit: "cover", width: "100%" ,height: "30%",}} alt="Slide " src={each.image} />
        </div>
            <div className=" overlay  mx-auto max-w-screen-xl  sm:py-16  lg:py-40">
              <h1 class=" text-4xl font-extrabold  tracking-tight leading-none md:text-5xl lg:text-6xl"style={{color: each.colour}}>Ultimate Step Support Ltd,</h1>
              <p class=" text-2xl font-bold  lg:text-4xl sm:px-16 lg:px-48" style={{color: each.colour}}>
              {each.text1}.
                  
              </p>
              <div class="flex flex-col space-y-4 rounded-lg border-solid border-navcolour sm:flex-row text-left pt-5 sm:space-y-0 sm:space-x-4">
                  
                <p className=' py-3 px-3 rounded-lg font-bold  border-navcolour text-1xl lg:text-3xl md:w-1/2' style={{color: each.colour}}>
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

