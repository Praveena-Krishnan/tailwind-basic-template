import React from 'react'
import HighResolution_icon from '../assets/HighResolution.png'
import Real_icon from '../assets/Real-time.png'
import Scheduling_icon from '../assets/Scheduling.png'
import button_icon from '../assets/button.png'

const Template = () => {
  return (
    //header
    
    <div className="bg-black min-h-screen lg:m-0 lg:px-20">
        <div className='text-white px-8 py-4 '>
            <div className='container mx-auto flex justify-between items-center lg:px-16 font-bold '>
                
                <div className='font-lg'>NjamAI</div>
                <div className='flex space-x-4'>More Templates</div>
             </div>
        </div>
       
    

    //get started
    <div className='py-16 bg-zinc-700 text-white text-center rounded-3xl lg:mr-20 lg:ml-20 mx-4 md:mx-8'>
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
    <div className='text-white lg:mr-20 lg:ml-20 mx-4 md:mx-8'>
            <h1 className='text-6xl font-bold mb-4 mt-14 text-left leading-tight'>Unleash Your <span className='text-purple-500'>Creativity</span></h1>
            <p>Discover how our AI-Powered Design Assistant transforms your ideas into stunning <br></br>designs effortlessly,Follow these simple steps to turn your vision into reality</p>
            
   
    </div>

    //features
    <div classname='py-16 bg-gray-100'>
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:px-14 text-white'>
                {["Upload Brief","Generate Designs","Refine Creation"].map((feature,index)=>(
                    <div key={index} className='bg-zinc-700 rounded-lg shadow p-6 text-left '>
                        <h3 className='text-3xl mb-4 text-white'>{feature}</h3>
                        <p>
                        {feature === "Upload Brief"
                        ? "Share your project details and let our AI grasp your vision."
                        : feature === "Generate Designs"
                        ? "Watch as our AI crafts unique design ideas tailored to you."
                        : "Perfect your chosen concept with easy-to-use AI tools."} 
                        </p>
                        </div>
                ))}
            </div>
        </div>
    </div>

    //high resolution
    <div className='py-16 mt-5'>
        <div className='container mx-auto px-4 flex flex-col md:flex-row items-center'>
            //text section
            <div className='md-w-1/2 text-white text-left mb-8 md:mb-0'>
                 <h1 className='text-3xl font-bold mb-4'>High-Resolution Outputs</h1>
                 <p className='text-lg'>
                 Download your final designs in high-resolution formats suitable <br></br> for print and digital use.Ensure your work looks professional<br></br>and polished in any medium.
                 </p>
                 <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded mt-3'>Get Started</button>
            </div>
        <div className='md:w-1/2 flex justify-end'>
          <img
            src={HighResolution_icon}
            alt=""
            className='w-full max-w-md rounded-lg shadow-lg'
            />
        </div>
            
        </div>
    </div>
    
    //real-time collaboration
    <div className='py-16'>
        <div className='container mx-auto px-4 flex flex-col md:flex-row items-center'>
        //image section
        <div className='md:w-1/2 flex justify-start'>
          <img
            src={Real_icon}
            alt=""
            className='w-full max-w-md rounded-lg shadow-lg'
            />
        </div>
        //text section
            <div className='md-w-1/2 text-white text-left pl-2 -md:pl-4 mr-15'>
                 <h1 className='text-3xl font-bold mb-4'>Real-Time Collaboration</h1>
                 <p className='text-lg'>
                 Seamlessly collaborate with your team in real-time.Share<br></br>ideas,give feedback,and make edits together,no matter<br></br>where you are.
                 </p>
                 <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded mt-3'>Get Started</button>
            </div>
            
        </div>
    </div>
    //Advanced Scheduling
    <div className='py-16'>
        <div className='container mx-auto px-4 flex flex-col md:flex-row items-center'>
            //text section
            <div className='md-w-1/2 text-white text-left mb-8 md:mb-0'>
                 <h1 className='text-3xl font-bold mb-4'>Advanced Scheduling Options</h1>
                 <p className='text-lg'>
                 Plan and schedule your design projects with ease.Use our<br></br>scheduling tools to set deadlines,track milestones,and ensure<br></br>timely delivery of yur design work
                 </p>
                 <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded mt-3'>Get Started</button>
            </div>
        <div className='md:w-1/2 flex justify-end'>
          <img
            src={Scheduling_icon}
            alt=""
            className='w-full max-w-md rounded-lg shadow-lg'
            />
        </div>
            
        </div>
    </div>
    //transforming imagination
    <div className='text-white lg:mr-20 lg:ml-20 '>
            <h1 className='text-6xl font-bold px-4 mb-4 mt-14 text-left leading-tight'>Transforming<br></br>Imagination into <span className='text-purple-500'>Reality</span></h1>
            <p className='px-4'>Unlock the full potential of your creativity with our AI-powered design assistant .<br></br>Explore new dimensions of design,from futuristic visuals to timeless craftsmanship,<br></br>and witness how AI can turn your wildest ideas into stunning realities.</p>
            
   
    </div>
    <div className="py-16 min-h-screen bg-black">
  <div className="container mx-auto px-4 md:px-20 flex flex-wrap gap-4">
    <div className='flex w-full gap-4'>
    {/* Box 1 */}
    <div className="bg-zinc-700 text-white rounded-2xl shadow-md p-6 md:h-72 md:w-2/5  w-full relative">
    <img
          src={button_icon}
          alt="Arrow Icon"
          className="absolute top-4 right-4  w-8 h-8 bg-zinc-700 rounded-full"
        />
      <p className="text-sm mb-6 mt-8 md:mt-0">
        Dive into the world of AI where design possibilities<br /> are limitless. Let the cutting-edge technology<br />
        transform your concepts into breathtaking visuals.
      </p>
      <h3 className="mt-40  text-2xl">Witness the Future</h3>
    </div>
    {/* Box 2 */}
    <div className="bg-zinc-700 text-white rounded-2xl shadow-md p-6 md:w-3/5 md:h-72 w-full relative">
    <img
          src={button_icon}
          alt="Arrow Icon"
          className="absolute top-4 right-4 w-8 h-8 bg-zinc-700 rounded-full"
        />
      <p className="text-sm mb-6 mt-8 md:mt-0">
        Step beyond the ordinary with designs that defy conventions.<br />
        Our AI conjures up imaginative visuals that push the<br />
        boundaries of creativity.
      </p>
      <h3 className="mt-40  text-2xl">Visualize the Impossible</h3>
    </div>
</div>
    {/*Row-2*/}
    <div className='flex w-full gap-4'>
    {/* Box 3 */}
    <div className="bg-zinc-700 text-white rounded-2xl shadow-md p-6 md:w-3/5 md:h-72 w-full relative">
    <img
          src={button_icon}
          alt="Arrow Icon"
          className="absolute top-4 right-4 w-8 h-8 bg-zinc-700 rounded-full"
        />
      <p className="text-sm mb-6 mt-8 md:mt-0 ">
        Experience the perfect blend of form and function. Our AI<br />
        ensures that every design not only looks stunning but also<br />
        serves its purpose flawlessly.
      </p>
      <h3 className="md:mt-40 mt-44 text-2xl">Synergy and Style</h3>
      
    </div>
    {/* Box 4 */}
    <div className="bg-zinc-700 text-white rounded-2xl shadow-md p-6 md:w-2/5 md:h-72 w-full relative">
    <img
          src={button_icon}
          alt="Arrow Icon"
          className="absolute top-4 right-4 w-8 h-8 bg-zinc-700 rounded-full"
        />
      <p className="text-sm mb-6 mt-8 md:mt-0">
        Embrace the elegance of meticulously crafted<br />
        designs. Our AI polishes every detail to bring a<br />
        timeless quality to your creative projects.
      </p>
      <h3 className="mt-40 text-2xl">Timeless Precision</h3>
    </div>
  </div>
  </div>
  </div>

</div>

  )
}

export default Template