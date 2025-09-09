import React from 'react'
import HomeHero from '../Components/HomeHero'
import HomeService from '../Components/HomeService'
import Estimate from '../Components/Estimate'
import Emergency from '../Components/Emergency'
import Faq from '../Components/Faq'
import Testimonial from '../Components/Testemonial'

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <section>
        <HomeService/>
      </section>
      <section>
        <Estimate/>
      </section>
      <section>
        <Emergency/>
      </section>
      <section>
        <Faq/>
      </section>
      <section>
        <Testimonial/>
      </section>
    </div>
  )
}

export default Home
