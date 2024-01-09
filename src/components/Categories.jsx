import React from 'react'
import Heading from './ui/Heading'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'

const Categories = () => {
  return (
    <MaxWidthWrapper className="mt-8">
        <Heading text="Our" coloredText='Categories'/>
<div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
<div className="relative flex items-center justify-center min-w-[170px] h-[400px] transition-transform transform hover:scale-105 shadow-md duration-300 ease-in-out cursor-pointer">
      <img
        src="https://media.istockphoto.com/id/182788481/photo/oil-change.jpg?s=612x612&w=0&k=20&c=HUbWmXVH4F1qjnbb18c0eTSi_ijBZCA0rMUqGBDF3U0="
        alt="category"
        className="w-full h-full object-cover rounded-[24px]"
      />
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <h2 className="mt-[24px] font-semibold text-4xl text-white">
          Bearing Oil
        </h2>
      </div>
    </div>
    <div className="relative flex items-center justify-center min-w-[170px] h-[400px]">
      <img
        src="https://media.istockphoto.com/id/182788481/photo/oil-change.jpg?s=612x612&w=0&k=20&c=HUbWmXVH4F1qjnbb18c0eTSi_ijBZCA0rMUqGBDF3U0="
        alt="category"
        className="w-full h-full object-cover rounded-[24px]"
      />
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <h2 className="mt-[24px] font-semibold text-4xl text-white">
          Bearing Oil
        </h2>
      </div>
    </div>
    <div className="relative flex items-center justify-center min-w-[170px] h-[400px]">
      <img
        src="https://media.istockphoto.com/id/182788481/photo/oil-change.jpg?s=612x612&w=0&k=20&c=HUbWmXVH4F1qjnbb18c0eTSi_ijBZCA0rMUqGBDF3U0="
        alt="category"
        className="w-full h-full object-cover rounded-[24px]"
      />
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <h2 className="mt-[24px] font-semibold text-4xl text-white">
          Bearing Oil
        </h2>
      </div>
    </div>
</div>

    </MaxWidthWrapper>
  )
}

export default Categories