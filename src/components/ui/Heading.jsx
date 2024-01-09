import React from 'react'

const Heading = ({text, coloredText = ""}) => {
  return (

    <h1 className="text-center mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl ">{text }{" "}<span className="text-blue-600 ">{coloredText}</span></h1>
  )
}

export default Heading