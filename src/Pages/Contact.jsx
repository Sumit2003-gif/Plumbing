import React from 'react'
import RequestServiceForm from '../Components/ContactPart'
import OurOffice from '../Components/OurOFFice'

const Contact = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://prohauz.bold-themes.com/plumbing/wp-content/uploads/sites/8/2018/09/featured_image_blog.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="text-lg font-bold uppercase tracking-widest mb-2">Home</div>
          <h1 className="text-5xl md:text-6xl font-bold">Contact</h1>
          <div className="w-[100%] md:w-[30%] h-[90%] absolute top-[5%] left-1/2 -translate-x-1/2 border border-white opacity-20" />
        </div>
      </section>
      <section>
        <RequestServiceForm/>
      </section>
      <section>
        <OurOffice/>
      </section>
    </div>
  )
}

export default Contact
