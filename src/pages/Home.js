import React from 'react'
import Hero from '../components/Hero';
import './custom.css'
function Home() {
  return (
    <div class="relative w-full bg-cover bg-center bg-no-repeat  bg-sky-50 bg-blend-multiply">
        <section className='w-full'>
            <section class="">
                    
            <Hero
      />
            </section>

            <div class="card-grid">
		<div class="card" style={{backgroundImage: "url(https://images.pexels.com/photos/409696/pexels-photo-409696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"}}>
		</div>
		
		<div class="card">
		</div>
		
		<div class="card" style={{backgroundImage: "url(https://images.pexels.com/photos/2567789/pexels-photo-2567789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"}}>
		</div>
		
		<div class="card">
		</div>
		
		<div class="card" style={{backgroundImage: "url(https://images.pexels.com/photos/6729088/pexels-photo-6729088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"}}>
		</div>
		
	</div>
	

        </section>
    </div>
  )
}

export default Home