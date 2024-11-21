import React from 'react'

const Footer = () => {
  return (
    <div className='p-[4vmin] bg-[#EBFEFF] text-white font-poppins text-xs lg:p-[20vmin] w-screen'>
      <div className='text-[#457B9D] text-[2vmin] font-semibold mb-[1vmin]'>Contacts</div>
      <div className='text-black font-bold text-4xl mb-[1vmin]'>Get in touch</div>
      <div className='text-black text-xs mb-[1vmin]'>rizfanher@gmail.com</div>
        <div className='flex w-[10vmin] justify-evenly mb-[8vmin]'>
          <a href='#'><div className='w-[3vmin]'><img src='Linkedin.png' /></div></a>
          <a href='#'><div className='w-[3vmin]'><img src='Github.png' /></div></a>
          <a href='#'><div className='w-[3vmin]'><img src='Instagram.png' /></div></a>          
        </div>
      <div className='text-xs text-black'>Copyright © 2023. Develop & Designed by Rizfan Herlaya</div>
      <div className='flex'>
        <div className='text-left text-[1.5vmin] lg:text-[1vmin] text-black mr-[1vmin] '>Designed By: Merchantsons - GIAIC # 00037391</div>
        <div className='w-[2vmin]'><img src='logo.png' /></div>
      </div>  
    </div>
  )
}

export default Footer