import React from 'react'
import Hero from '../components/Hero';
import './custom.css'
import { Link } from "react-router-dom";
import domic from '../images/2149408172.jpg'
import respite from '../images/2151164581.jpg'
import supported from '../images/2149741230.jpg'
import volleball from '../images/volleyball.jpg'
import hiking from '../images/hiking.jpg'
import gardening from '../images/gardening.jpg'
import gym from '../images/gym.jpg'
import stroll from '../images/stroll.jpg'
import basketball from '../images/basketball.jpg'
import fish from '../images/fishing.jpg'
function Home() {
  return (
    <div class=" container relative w-full bg-cover bg-center bg-no-repeat    mb-5 bg-sky-50 bg-blend-multiply">
        <section className=''>
            <section class="">
                    
            <Hero
      />
            </section>


            <div class="px-auto mx-auto max-w-screen-xl text-center pt-6 flex ">
                    <h4 class="md:mb-2 text-xl font-extrabold tracking-tight leading-none text-darkbluetheme md:text-3xl lg:text-3xl">
                        Our person-centred services and activity based care delivery model. <span className='text-blue-600'><Link to='/activities'>Learn More </Link></span>
                    </h4>

                    
                </div> 

            <div class="card-grid">
		<div class="card" style={{backgroundImage: "url("+stroll+")"}}>
		</div>
		
		<div class="card" style={{backgroundImage: "url("+gym+")"}}>
		</div>

        <div class="card" style={{backgroundImage: "url("+fish+")"}}>
		</div>
		
		
		<div class="card" style={{backgroundImage: "url("+volleball+")"}}>
		</div>
		
		<div class="card" style={{backgroundImage: "url("+hiking+")"}}>
		</div>
		
		<div class="card" style={{backgroundImage: "url("+gardening+")"}}>
		</div>
        <div class="card" style={{backgroundImage: "url("+basketball+")"}}>
		</div>
		
	</div>
	

        

        
        <section className=' pb-8'>
            <div class=" px-4 mx-auto max-w-screen-xl text-center pt-4">

                <div class="px-4 mx-auto max-w-screen-xl text-center pt-6 flex ">
                    <h4 class="md:mb-4 text-2xl font-extrabold tracking-tight leading-none text-darkbluetheme md:text-3xl lg:text-3xl">
                        The services we offer include:
                    </h4>

                    {/* <div className="mb-4 rounded-lg overflow-hidden sm:w-16 lg:mt-0 mt-0 sm:mt-0">
                        <img src={serv} alt="Residential Care" className="w-full lg:h-full h-12 object-cover" />
                    </div> */}
                </div> 

                <div class=" lg:flex grid  lg:grid-cols-2 lg:gap-x-3 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 item-stretch ">

                <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards col-span-1 rounded-lg bg-bluetheme lg:w-1/2 md:w-1/3 mt-8 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={supported} alt="male-social-worker-taking-care-old-woman" />
                        <h5 className="md:text-2xl text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                            <p >
                            Supported Living
                            </p>
                        </h5>
                        <p className="font-normal text-base md:text-base text-darkbluetheme dark:text-gray-400 pt-4">
                            <p class='mx-2 text-justify'>
                            Our Supported Living services enable people to live independently and manage their own tenancies, with support 
                            designed around their needs and goals.
                            </p>

                            <Link to="services" 
                                 class="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:py-3 md:mt-3 py-2 px-5 text-white font-medium text-sm md:text-lg text-center
                                 text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-green-400 ">
                                     Learn more
                                </Link>
                        </p>
                    </div>


                    <div className=" shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards col-span-1 rounded-lg bg-bluetheme  md:w-1/2 mt-8 sm:items-center sm:justify-center">
                        <img class="rounded-lg" src={domic} alt="old man sitting on a wheelchair" />
                        <h5 className="md:text-2xl text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                            <p>
                            Personal Care
                            </p>
                        </h5>
                        <p className=" text-base md:text-base text-darkbluetheme dark:text-blue-500 pt-4">
                            <p class='mx-2 text-justify'>
                                We help clients move around safely, using mobility aids if necessary.

                        
                            </p>

                            <Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:py-3 md:mt-3 py-2 px-5 text-white font-medium text-sm md:text-lg text-center
                                text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-green-400 ">
                                    Learn more
                                </Link>
                        </p>
                    </div>
                    

                    
                
                    <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards col-span-1 lg:w-1/2 rounded-lg bg-bluetheme md:w-1/3 mt-8 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={respite} alt="young-doctor-helping-one-guy-stand-up" />
                        <h5 className="md:text-2xl text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                            <p>
                            Respite Care
                            </p>
                        </h5>
                        <p className="font-normal text-base md:text-base text-darkbluetheme dark:text-gray-400 pt-4">
                            <p class='mx-2 text-justify'>
                                We help family members get some relief in order to re-energise at peace by providing
                                temporary care services to their loved ones being looked after.
                           
                            </p>

                            <Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:py-3 md:mt-3 py-2 px-5 text-white font-medium text-sm md:text-lg text-center
                                text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-green-400 ">
                                    Learn more
                            </Link>
                        </p>
                    </div>

                    
                </div>
            </div>

        </section>
        </section>
    </div>
  )
}

export default Home