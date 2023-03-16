import React from 'react'

interface ITitleProps {
  title: string
}

const Title: React.FC<ITitleProps> = ({ title }) => {
  return (
    <>
      <div className="grid items-center">
        <h1 className="text-5xl lg:text-4xl md:text-3xl text-slate-900 filter drop-shadow-lg ">
          {title}
        </h1>
      </div>
    </>
  )
}

export default Title
