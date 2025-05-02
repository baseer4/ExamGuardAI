import React from 'react'

const AboutPage = () => {
  return (
      <div className="flex justify-center items-center min-h-[calc(100vh-5rem)]">
        <div className="card bg-base-100 w-96 shadow-sm border-2">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title">about</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          </div>
      </div>
    </div>
  )
}

export default AboutPage