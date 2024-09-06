import React from 'react'
/* import { Helmet } from 'react-helmet-async'; */
import {TbTargetArrow,TbStarFilled} from 'react-icons/tb'
import { IoMdStar } from "react-icons/io";

import {HiLightBulb} from 'react-icons/hi'
import { IconContext } from "react-icons";

function About() {
  return (
    <div class="relative w-full bg-cover bg-center bg-no-repeat  bg-sky-50 bg-blend-multiply">

    {/*  <Helmet>
            <title>About WaterFields HealthCare Ltd</title>
            <meta name="description" content="Providing person centred care and support to all our service users with a range of care and support needs.
                        "/>
            <link rel="canonical" href="/about" />
        </Helmet> */}
      <section className='bg-sky-50'>
            <div class=" px-4 mx-auto max-w-screen-xl mt-4">

                <div class="px-4 mx-auto max-w-screen-xl text-center pt-6 py-4 lg:py-12 ">
                    <h1 class="mt-8 pt-7 mb-4 text-3xl font-extrabold tracking-tight leading-none text-darkbluetheme md:text-3xl lg:text-5xl">
                       About Ultimate Step Support
                    </h1>

                    
                </div>

                <div class="md:flex pt-4 pb-4 bg-sky-50">

                    <div class="md:w-1/2 shadow-2xl sm:82 rounded-lg bg-gray-200  sm:items-center sm:justify-center   mx-2 ">
                        <div class='flex ml-4'>
                        <h5 class=" mb-4 text-2xl font-bold tracking-tight leading-none text-center text-titleblue md:text-3xl lg:text-4xl pt-2">
                           Our Mission <br/><br/>
                        </h5>
                        <IconContext.Provider value={{ color: '#FBCB0A', size: '50px', padding:'1px ' }}>
                            <div class="  sm:items-center sm:justify-center    mb-4">
                              <TbTargetArrow class="sm:items-center sm:justify-center  "/>
                            </div>
                          </IconContext.Provider>
                       </div>

                        <p class="px-4 mx-2 text-justify font-normal text-darkbluetheme text-sm md:text-base">
                        
                            To provide a high standard of care and support to all our service users
                            promoting their wellbeing. Providing person centered care and support to all
                            our service users with a range of care and support needs. Our team of
                            healthcare professionals is there to provide care and support 24/7. At Ultimate
                            Step Support Ltd, we are dedicated to providing compassionate, high-quality
                            care tailored to the unique needs of each individual. We offer a wide range of
                            services including supported living, respite care for service users which
                            Learning Disabilities and mental health and other complex care needs. We
                            prioritise dignity, respect and independence, ensuring that all our service
                            users receive personalised care and support in a more nurturing environment. 


                        <br/><br/>

                        </p>

                    </div>

                    <div class="md:w-1/2 shadow-2xl sm:82 rounded-lg bg-gray-200  sm:items-center sm:justify-center   mx-2 ">
                        <div class='flex ml-4'>
                        <h5 class=" mb-4 text-2xl font-bold tracking-tight leading-none text-center text-titleblue md:text-3xl lg:text-4xl pt-2">
                           Our Vision <br/><br/>
                        </h5>
                        <IconContext.Provider value={{ color: '#FBCB0A', size: '50px', padding:'1px ' }}>
                            <div class="  sm:items-center sm:justify-center    mb-4">
                              <HiLightBulb class="sm:items-center sm:justify-center  "/>
                            </div>
                          </IconContext.Provider>
                       </div>

                        <p class="px-4 mx-2 text-justify font-normal text-darkbluetheme text-sm md:text-base">
                        
                            Ultimate Step Support Ltd will be a recognised leader in improving the quality
                            of life of individuals we support and their social networks.
                            Our vision is to become providers of choice. We envision a future where every
                            individual receives bespoke, person-centered and empathetic care, fostering
                            trust and well-being in our community. Our dedication to excellence ensures
                            that each client experiences good quality care, holistic support and
                            empowering them to lead a healthier life. At Ultimate Step Support Ltd, our
                            goal is to build and contribute to a healthcare system where quality and self-
                            centered care are paramount, reinforcing our commitment to a healthier and
                            happier future for all. 


                        <br/><br/>

                        </p>

                    </div>

                </div>

                <div class="md:flex pt-4 pb-1">

                     

                    <div class="md:w-full  sm:82 rounded-lg  sm:items-center sm:justify-center   mx-2 ">
                        <h5 class="mx-auto mb-2 text-2xl font-bold tracking-tight leading-none text-center text-darkbluetheme md:text-3xl lg:text-5xl pt-2">
                           Our Values <br/><br/>
                        </h5>

                        <p className='mt-3 mb-2 text-darkbluetheme text-lg md:text-2xl'><b>Our values define everything that we do. They&#39;re:</b></p>

                        <div class="  grid pb-4 lg:grid-cols-2 lg:gap-x-3 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 item-stretch ">
                       
                            
                            <div class='flex col-span-1 shadow-xl rounded-lg bg-gray-200'>
                                <IconContext.Provider value={{ color: '#FBCB0A', size: '50px', padding:'2px ' }}>
                                    <div class="  sm:items-center sm:justify-center    mb-1">
                                    <TbStarFilled class="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            

                                <p class="pl-4 text-justify font-medium text-darkbluetheme text-sm md:text-base">
                                
                                <b class="text-titleblue">Independence -</b> We prioritize our service users' independence.

                                <br/><br/>

                                </p>

                            </div>

                            <div class='flex col-span-1 shadow-xl rounded-lg bg-gray-200'>
                                <IconContext.Provider value={{ color: '#FBCB0A', size: '50px', padding:'1px ' }}>
                                    <div class="  sm:items-center sm:justify-center    mb-4">
                                    <TbStarFilled class="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            
                                <p class="px-4 text-justify font-medium text-darkbluetheme text-sm md:text-base">
                                
                                <b class="text-titleblue">Individuality -</b> Each person is supported and taken care of according to their care needs, following their care and support plan.

                                <br/><br/>

                                </p>


                            </div>

                            <div class='flex mt-4 col-span-1 shadow-xl rounded-lg bg-gray-200'>
                                <IconContext.Provider value={{ color: '#FBCB0A', size: '50px', padding:'1px ' }}>
                                    <div class="  sm:items-center sm:justify-center    mb-1">
                                    <TbStarFilled class="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            
                                <p class="px-4 mx-2 text-justify font-medium text-darkbluetheme text-sm md:text-base">
                                
                                <b class="text-titleblue">Person Centred Care -</b>Ultimate Step Support is flexible and we value service user’s unique needs. 
                                We work with each individual according to their care and support plan.
                                <br/><br/>

                                </p>

                            </div>

                            <div class='flex mt-4 col-span-1 shadow-xl rounded-lg bg-gray-200'>
                                <IconContext.Provider value={{ color: '#FBCB0A', size: '50px', padding:'1px ' }}>
                                    <div class="  sm:items-center sm:justify-center    mb-1">
                                    <TbStarFilled class="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            
                                <p class="px-4 mx-2 text-justify text-darkbluetheme font-medium text-sm md:text-base">
                                
                                <b class="text-titleblue">Choice -</b> At Ultimate Step Support we value everyone's happiness and comfort. Service users are free to choose the services they want with help of 
                                their family and how they want to be supported.
                                <br/><br/>

                                </p>

                            </div>

                            <div class='flex mt-4 col-span-1 shadow-xl rounded-lg bg-gray-200'>
                                <IconContext.Provider value={{ color: '#FBCB0A', size: '50px', padding:'1px ' }}>
                                    <div class="  sm:items-center sm:justify-center    mb-1">
                                    <TbStarFilled class="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            
                                <p class="px-4 mx-2 text-justify text-darkbluetheme font-medium text-sm md:text-base">
                                
                                <b class="text-titleblue">Equality -</b> We respect, embrace, and celebrate everyone&#39;s unique
                                differences.
                                <br/><br/>

                                </p>

                            </div>

                            <div class='flex mt-4 col-span-1 shadow-xl rounded-lg bg-gray-200'>
                                <IconContext.Provider value={{ color: '#FBCB0A', size: '50px', padding:'1px ' }}>
                                    <div class="  sm:items-center sm:justify-center    mb-1">
                                    <TbStarFilled class="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            
                                <p class="px-4 mx-2 text-justify text-darkbluetheme font-medium text-sm md:text-base">
                                
                                <b class="text-titleblue">Pride -</b> We are passionate about making a positive difference to
                                the individuals and community we support.
                                <br/><br/>

                                </p>

                            </div>

                        </div>
                        
                    </div> 

                </div>

                <div class="px-4 mx-auto max-w-screen-xl text-center pt-6 py-4 lg:py-12 ">
                    <h1 class="mt-8 pt-7 mb-4 text-3xl font-extrabold tracking-tight leading-none text-darkbluetheme md:text-3xl lg:text-5xl">
                    Our Experience
                    </h1>

                    
                </div>

                <div class="md:flex pt-4 pb-4 bg-sky-50">

                    <div class="md:w-1/2 shadow-2xl sm:82 rounded-lg bg-gray-200  sm:items-center sm:justify-center   mx-2 ">
                        <div class='flex ml-4'>
                        <h5 class=" mb-4 text-xl font-bold tracking-tight leading-none text-center text-titleblue md:text-2xl lg:text-3xl pt-2">
                        Munhamo Gumbo Mberi, Director <br/><br/>
                        </h5>
                        {(() => {
                                const arr = [];
                                for (let i = 0; i < 5; i++) {
                                    arr.push(
                                       <IconContext.Provider value={{ color: '#FBCB0A', size: '20px', padding:'1px ' }}>
                            <div class="  sm:items-center sm:justify-center    mt-4">
                              <IoMdStar class="sm:items-center sm:justify-center  "/>
                            </div>
                          </IconContext.Provider>
                                    );
                                }
                                return arr;
                            })()}
                            
                       </div>

                        <p class="px-4 mx-2 text-justify font-normal text-darkbluetheme text-sm md:text-base">

                            ***********************************************************************************<br/>
                            As a mental health practitioner Lewis has extensive experience working with both adults and 
                            young people in a variety of settings. Lewis has specialized in one to one work as a CAMHS 
                            practitioner and working with adults in community teams. Alongside his experience as a mental 
                            health practitioner Lewis is also a registered social worker and has varied experience working within local authorities.


                        <br/><br/>

                        </p>

                    </div>


                    <div class="md:w-1/2 shadow-2xl sm:82 rounded-lg bg-gray-200  sm:items-center sm:justify-center   mx-2 ">
                        <div class='flex ml-4'>
                        <h5 class=" mb-4 text-xl font-bold tracking-tight leading-none text-center text-titleblue md:text-2xl lg:text-3xl pt-2">
                        Prince Armah, Operations Manager <br/><br/>
                        </h5>

                                            {(() => {
                                const arr = [];
                                for (let i = 0; i < 5; i++) {
                                    arr.push(
                                       <IconContext.Provider value={{ color: '#FBCB0A', size: '20px', padding:'1px ' }}>
                            <div class="  sm:items-center sm:justify-center    mt-4">
                              <IoMdStar class="sm:items-center sm:justify-center  "/>
                            </div>
                          </IconContext.Provider>
                                    );
                                }
                                return arr;
                            })()}
                            
                                
                                
                          
                        
                       </div>

                        <p class="px-4 mx-2 text-justify font-normal text-darkbluetheme text-sm md:text-base">

                            ***********************************************************************************<br/>
                            Dominic holds a BA Hons in Criminology and has a wealth of experience working across a 
                            variety of services delivering support for vulnerable adults and young people with mental 
                            health needs, and learning difficulties. Dominic has a varied background in setting up a 
                            number of provisions delivering supported living services for a variety of service users.
                        <br/><br/>

                        </p>

                    </div>
                    </div>

            </div>
      </section> 
    </div>
  )
}

export default About

