import React from 'react'

const Body = () => {
  return (
    <div>
        <div className='bg-[#EBFEFF] p-[8vmin] lg:p-[5vmin]'>
            <div className='bg-[#EBFEFF] justify-self-center'><img src='Header.png' /></div>
            <div className='bg-[#EBFEFF] -mt-[15vmin] flex lg:ml-[30vmin] lg:-mt-[22vmin] pb-[13vmin]'>
                <div className='w-[20vmin] lg:w-[34vmin] lg:ml-[6vmin]'>
                    <button className='flex rounded-sm pl-[2.5vmin] pr-[2.5vmin] pt-[1.3vmin] pb-[1.3vmin] text-[1.5vmin] hover:bg-sky-900 lg:pl-[6vmin] lg:pr-[6vmin] lg:pt-[2vmin] lg:pb-[2vmin] lg:rounded-md lg:text-[2.2vmin] bg-[#457b9d] text-white'>Download CV  <img className='w-[2vmin] lg:w-[3vmin]' src='Cloud.png' /></button>
                </div>
                <button className='flex rounded-sm pl-[4vmin] pr-[4vmin] pt-[1vmin] pb-[1vmin] text-[1.5vmin] hover:text-white hover:bg-sky-900 lg:pl-[8vmin] lg:pr-[8vmin] lg:pt-[2vmin] lg:pb-[2vmin] lg:rounded-md lg:text-[2.2vmin] bg-[#EBFEFF] text-[#457B9D] border-[1px] border-[#457B9D]'>Explore More</button>
            </div>

        </div>
        <div className='bg-white'>
            <div className='bg-white justify-self-center'><img src='About.png' /></div>        
        </div>
        <div className='bg-[#EBFEFF] w-[90%] justify-self-center'>
            <div className='p-[10vmin] bg-[#EBFEFF] justify-self-center'><img src='Skills.png' /></div>        
        </div>
        <div className='bg-white'>
            <div className='pt-[6vmin] text-center text-[3vmin] font-medium text-[#457B9D]'>Projects</div>
            <div className='text-black text-center text-[5vmin] font-semibold'>What I have made?</div>
            <div className='p-[5vmin] bg-white justify-self-center'><img src='Frame 3.png' /></div>   
            <div className='p-[5vmin] bg-white justify-self-center'><img src='Frame 4.png' /></div>        
        </div>
    </div>
  )
}

export default Body