import React from 'react'

const Test = ({ children, text}) => {
  return (
    <div className='test'>
      {children}
      <p> {text}</p>
    </div>
  )
}

export default Test