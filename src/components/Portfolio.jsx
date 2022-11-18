import React from 'react'

const Portfolio = () => {
  return (
    <div name='portfolio' className='w-full md:h-screen text-neutral-100'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-neutral-100 border-pink-600'>Portfolio</p>
            <p className='py-6'>Checkout some of my recent work</p>
          </div>
{/* Container for projects */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* map function for each project in projectData */}
          </div>
        </div>
    </div>
  )
}

export default Portfolio
