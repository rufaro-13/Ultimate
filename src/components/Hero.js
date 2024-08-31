import React from 'react';
/* import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import doctor from "../images/social-worker-taking-care-senior-woman.jpg"
import hands from "../images/hands-holding-each-other-support.jpg"
import closesupport from "../images/closeup-support-hands.jpg"
 */
const Hero = () => {
   /*  const images = [
        {image: hands,
         colour: "#B5C4C0",
         text1 :"the home of quality care.",
         text2: " An affordable service which prioritises the comfort and wellbeing of clients."
        },
        {image: doctor,
          colour: "icyteal",
          text1 :"where everyone matters",
          text2: " Your family becomes our family too."
         },
         {image: closesupport,
          colour: "#0802A3",
          text1 :"monitors everyone's health",
          text2: " We make sure your loved ones and our care givers are in good health."
         },] */

    return (
      {/* <Zoom scale={1.4} indicators={false} autoplay={true} arrows={false} pauseOnHover={true} canSwipe={true}>
       
      {images.map((each, index) => (
           <section>
            <div className=" rounded-lg  border-1 shadow-2xl mx-auto" key={index} style={{ width: "50%" }}>
              <img className="brightness-70 object-scale-down rounded-lg" alt="Slide " src={each.image} />
          </div>
              <div className=" overlay  mx-auto max-w-screen-xl  sm:py-16  lg:py-40">
                <h1 class=" text-4xl font-extrabold  tracking-tight leading-none text-pink-800 md:text-5xl lg:text-6xl"style={{color: each.colour}}>NV HealthCare Ltd,</h1>
                <p class=" text-2xl font-bold text-pink-800  lg:text-4xl sm:px-16 lg:px-48" style={{color: each.colour}}>
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


     
  </Zoom> */}
    );
};

export default Hero;