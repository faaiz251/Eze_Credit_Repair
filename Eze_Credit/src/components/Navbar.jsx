import React from 'react'

function Navbar() {
  return (
    
    <nav className="flex justify-between  items-center p-4 bg-blue-900 text-white">
      <div className="flex font-times-new-roman"> 
        <h1>Start your journey to a better credit score today,</h1>
        <h1 className='text-blue-300 '>Start now</h1>
      </div>
      <div className="flex font-times-new-roman items-center gap-4">
        <div className="flex font-times-new-roman items-center gap-2">
          <h1>0000-000-000</h1>
        </div>
        <div className="flex justify-end gap-1">
          {/* <Link to="/signin" className="hover:underline">LOGIN</Link>
          <span>|</span>
          <Link to="/signup" className="hover:underline">REGISTER</Link> */}
          <a href="#login" className="hover:underline">LOGIN</a>
          <span>|</span>
          <a href="#register" className="hover:underline">REGISTER</a>
        </div>
      </div>
    </nav>

    

  )
}

export default Navbar
