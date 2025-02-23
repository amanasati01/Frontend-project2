import React from 'react'

function HorizontalGrid() {
  return (
    <div>
        {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="h-[1px] bg-gradient-to-l from-white/5 to-white/15 my-8 mx-3"></div>
        ))}
    </div>
  )
}

export default HorizontalGrid
