import React from 'react'

const Container = ({className , children}) => {

  return (
    <div className={` max-w-[1200px] mx-auto px-3 ${className} `}>
      {children}
    </div>
  )
}

export default Container
