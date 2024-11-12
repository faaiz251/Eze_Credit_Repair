import React from "react"
export function Home() {
    return (
        // div of the woman 
    <>
        <div className="bg-zinc-100/20 flex  h-[430px] w-full">
            <div className="p-[60px]">
                <h2 className="text-blue-600  mb-1 text-2xl">YOUR PATH TO BETTER CREDIT,</h2>
                <h1 className="text-blue-900 text-4xl font-bold">MADE EASY</h1>
                <p className="text-zinc-600 text-xl mb-3 font-semibold">Let's Fix Your Credit and Raise Your Score</p>
                <p className="text-zinc-600 font-semibold">Unlock financial freedom with a better credit score.</p>
                <p className="text-zinc-600 font-semibold"> Our easy-to-follow approach helps you improve your </p>
                <p className="text-zinc-600 mb-5 font-semibold">credit for better rates,loans and peace of mind.</p>
                <button className="bg-blue-600 text-white px-4 py-1 rounded-md">SIGN UP NOW</button>
            </div>
            <div className="bg-blue-400 w-1/2">
                {/* left this div for  the image of the woman   */}
            </div>
        </div>
        {/* get started section  */}
        <div className="bg-blue-800 h-[430px] relative  w-full">
            <div className="bg-slate-500 w-1/2 h-[350px]  rounded-md absolute top-[100px] border-2 border-white left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute text-center left-1/2 transform -translate-x-1/2  bottom-5">
            <p className="text-white w-[900px] text-lg mb-3">Achieving a better credit score is key to unlocking financial freedom and accessing life's biggest opportunities.With our EzeCredit Repair Program, our services will change your path to a brighter and improving credit profile,so you can secure better rates, loans, and financial peace of mind.</p>
            <button className="bg-red-600 font-bold text-xl text-white px-4 py-1 rounded-md">Get Started</button>
            </div>
        </div>
        {/* About us section */}
        <div className="flex flex-col md:flex-row items-start py-8 px-12 font-sans">
      {/* Text Content */}
      <div className="flex-1 ">
        <h1 className="text-3xl font-bold text-blue-800">About Us</h1>
        <p className="text-base text-gray-800 mt-4 leading-relaxed">
          For the past 15 years, we've been dedicated to helping thousands of
          individuals repair their credit and reclaim financial control.
          At <strong>EzeCredit</strong>, we fight for every consumer's right to an accurate, fair,
          and substantiated credit report.
        </p>

        <h2 className="text-xl font-bold text-green-700 mt-6">Target Area</h2>
        <ul className="list-none pl-0 text-base text-gray-800 mt-4 space-y-2 leading-relaxed">
          <li>
            <span role="img" aria-label="check">✔️</span> Like the A-Team, we become your trusted advocates,
            challenging inaccuracies and disputing negative items until they are removed.
          </li>
          <li>
            <span role="img" aria-label="check">✔️</span> Credit Evaluation - In-depth assessment of your credit report
          </li>
          <li>
            <span role="img" aria-label="check">✔️</span> Unlimited Disputes: We challenge any number of inaccuracies
          </li>
          <li>
            <span role="img" aria-label="check">✔️</span> Debt & Inquiry Verification and Removal: We verify and dispute unauthorized inquiries
          </li>
          <li>
            <span role="img" aria-label="check">✔️</span> Escalation of Disputes for Fast Removal: We escalate disputes
            when necessary. Recommendations to Boost Score: Personalized strategies to help raise your credit score.
          </li>
        </ul>

        <button className="bg-blue-800 text-white px-4 py-2 rounded mt-6 text-sm flex items-center hover:bg-blue-900">
          READ MORE <span className="ml-2">→</span>
        </button>
      </div>

      {/* Image Placeholder */}
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 md:pl-6">
        <div className="w-48 h-80 bg-gray-200 flex justify-center items-center text-gray-500 text-sm italic rounded-lg">
          Image Placeholder
        </div>
      </div>
    </div>
    {/* What we do section*/}
    <div className="flex flex-col items-center bg-blue-900 text-white p-6 font-sans">
      
      {/* Main Container with Flex */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full space-x-0 md:space-x-10">
        
        {/* Left Side - What We Do Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-md">
          {/* Main Title */}
          <h1 className="text-3xl font-bold text-blue-200">What We Do</h1>
          
          {/* Description */}
          <p className="text-lg">
            Empowering You to Seize New Opportunities, <br />
            Because Everyone Deserves a Second Chance.
          </p>
          <p className="text-green-400 italic">
            When opportunity knocks, will your credit stand in the way?
          </p>
          
          {/* Services Header */}
          <div className="flex items-center space-x-3 mb-4"> {/* Flex container with spacing */}
  {/* Placeholder for Logo Image */}
  <div className="w-24 h-10 bg-gray-200 flex items-center justify-center rounded">
    <span className="text-gray-500 italic">Logo</span>
  </div>
  
  {/* Services Benefits Heading */}
  <h2 className="text-2xl font-bold text-white">Services Benefits:</h2>
</div>
          
          {/* Benefits List */}
          <ul className="text-base space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">➡️</span> 
              Strong credit score opens doors to financial freedom.
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">➡️</span> 
              Easy path to better credit, to be ready for every opportunity that comes your way.
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">➡️</span> 
              Fast track repair and boost your score by 50-100 points* within 30 to 60 days.
            </li>
          </ul>

          {/* Get Started Button */}
          <button className="bg-green-500 text-white font-semibold px-6 py-2 rounded mt-4 hover:bg-green-600">
            GET STARTED
          </button>
        </div>

        {/* Right Side - Basketball Image and Text */}
        <div className="flex flex-col items-center justify-center mt-6 md:mt-0">
          {/* Basketball Image Placeholder */}
          <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <span className="text-gray-500 italic">Basketball Image</span>
          </div>
          
          {/* Text beside the Basketball Image */}
          <p className="text-sm text-center md:text-left">
            Don’t Let Your Credit Block Opportunities <br />
            Start Building a Better Score Today!
          </p>
        </div>

      </div>
    </div> 
           {/* faq section */}
           {/* progressive correct and recovery plan */}
           {/* testimonials */}


           {/* News Blog section */}
           <div className="p-8 bg-gray-100 min-h-screen">
        
        {/* Main Content Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">News & Blog</h1>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Credit Repair Section */}
          <div className="space-y-8">
            <h2 className="text-blue-700 text-xl font-bold">Credit Repair: What It Is, How It Works, Related...</h2>

            {/* Credit Repair Card 1 */}
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://via.placeholder.com/600x300" 
                alt="Credit Repair 1"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-sm border-2 border-white text-xs w-fit">August 29, 2024</span>
              </div>
            </div>

            {/* Credit Repair Card 2 */}
            <h2 className="text-blue-700 text-xl font-bold">Credit Repair: How Credit Repair Works</h2>
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://via.placeholder.com/600x300" 
                alt="Credit Repair 2"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-sm border-2 border-white text-xs w-fit">August 29, 2024</span>
              </div>
            </div>
          </div>
          
          {/* Related Articles Section */}
          <div className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-700">Related Articles</h2>

            {/* Article 1 */}
            <div className="flex items-start space-x-4 border-b border-gray-300 pb-4">
              <img 
                src="https://via.placeholder.com/100x100" 
                alt="Common Things"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="font-bold text-blue-700">Common Things That Improve or Lower Scores</h3>
                <p className="text-sm text-gray-600">
                  A secured credit card is a type of credit card that is backed by a cash deposit, which serves as collateral should you default on payments. A secured card can rebuild credit.
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div className="flex items-start space-x-4 border-b border-gray-300 pb-4">
              <img 
                src="https://via.placeholder.com/100x100" 
                alt="Average Outstanding Balance"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="font-bold text-blue-700">Average Outstanding Balance on Credit Cards: How It Works and Calculation</h3>
                <p className="text-sm text-gray-600">
                  Credit history is the ongoing documentation of your financial information, including repayment of your debts. Your credit history is an essential part of your credit report.
                </p>
              </div>
            </div>

            {/* Article 3 */}
            <div className="flex items-start space-x-4 pb-4">
              <img 
                src="https://via.placeholder.com/100x100" 
                alt="What is a Secured Credit Card?"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="font-bold text-blue-700">What Is a Secured Credit Card? How It Works and Benefits</h3>
                <p className="text-sm text-gray-600">
                  A fair credit score falls in the range between poor and good. A fair FICO credit score is 580 to 669, and the equivalent near-prime VantageScore is 601 to 660.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
        
        
    )
}

