import React from 'react'

const Template = () => {
  return (
    //header
    
    <div className="bg-black min-h-screen">
        <div className='text-white px-8 py-4 '>
            <div className='container mx-auto flex justify-between items-center px-16 font-bold '>
                
                <div className='font-lg'>NjamAI</div>
                <div className='flex space-x-4'>More Templates</div>
             </div>
        </div>
       
    

    //get started
    <div className='py-16 bg-gray-900 text-white text-center rounded-3xl mr-20 ml-20'>
        <div className='container mx-auto px-4'>
            <h1 className='text-7xl font-bold mb-4 text-left leading-tight'>
                Your AI-Powered <br></br><span className='text-purple-500'>Design</span> Assistant
            </h1>
            <p className='mb-8 text-left leading-relaxed'>
            Unlock your creative potential. Seamlessly generate, customize,<br></br> and perfect your
            designs with cutting-edge AI technology.
            </p>
        </div>
        <div className='space-x-4 flex ml-3'>
            <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded'>Get Started</button>
            <button className=' text-white font-bold py-3 px-6 rounded'>More Templates</button>
        </div>
    </div>

    //menus
    <div className='flex justify-around text-white px-4 mr-15 ml-15 mt-3'>
        <div>Logoipsum</div>
        <div>Logoipsum</div>
        <div>Logoipsum</div>
        <div>Logoipsum</div>
    </div>

    //unleash creativity
    <div className='text-white mr-20 ml-20 '>
            <h1 className='text-6xl font-bold mb-4 mt-14 text-left leading-tight'>Unleash Your <span className='text-purple-500'>Creativity</span></h1>
            <p>Discover how our AI-Powered Design Assistant transforms your ideas into stunning <br></br>designs effortlessly,Follow these simple steps to turn your vision into reality</p>
            
   
    </div>
    </div>

  )
}

export default Template