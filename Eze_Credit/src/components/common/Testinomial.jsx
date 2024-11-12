import React from 'react'

export function Testinomial() {
    return (
        <div className="bg-white relative py-10 flex flex-col items-center">
  {/* Header Section */}
  <div className="text-center mb-8">
    <h2 className="text-3xl text-blue-600 font-semibold">What Our Customers Say?</h2>
  </div>

        
          {/* Slate Background Section (Positioned Below Cards) */}
          <div className=" absolute top-[100px] w-full bg-blue-800 h-[200px] z-0"></div>
          <div className='absolute top-[125px] w-[1100px] bg-white shadow-xl h-[250px] rounded-md z-5'></div>

          
  {/* Stacked Card Container */}
  <div className="relative flex justify-center top-[50px] items-center w-full max-w-4xl h-[400px]">
    {/* Card 1 (Left Card) */}
    <div className="absolute w-[270px] h-[270px] bg-white shadow-lg border-4 border-blue-800 z-10 left-[10px] top-[25px]">
      {/* Card 1 content */}
    </div>

    {/* Card 2 (Center Card, Topmost) */}
    <div className="absolute w-[350px] h-[350px] top-[10px] bg-white shadow-lg border-4 border-blue-800 z-20">
      {/* Card 2 content */}
    </div>

    {/* Card 3 (Right Card) */}
    <div className="absolute w-[270px] h-[270px] bg-white shadow-lg border-4 border-blue-800 right-[10px] top-[25px] z-0">
      {/* Card 3 content */}
    </div>

  </div>
</div>
  )
}

