import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../constants'
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";




const Footer = () => {
  return (
    <footer className='mt-20 border-t py-10 lg:mx-20 md:mx-20 border-neutral-700'>
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-20'>
        <div className='flex w-[70%] items-center col-span-2'>
            <ul className='flex flex-col justify-start gap-2'>
                <div className='flex items-center'>
                <p className='mt-3 md:text-3xl text-4xl lg:text-5xl tracking-widest font-semibold text-neutral-400'>Virtual<spn className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Gama</spn></p>
                </div>
                <p className='text-[15px] tracking-wider font-light text-neutral-500 p-1'>Copyright © 2024 VirtualGama Inc.<br/> All Rights Reserved.</p>
                <div className='flex gap-5 py-1 px-1' >
                    {[<CiLinkedin/>, <FaXTwitter/>, <FaInstagram/>, <FaFacebookSquare/>].map((icon,i)=>(
                        <li>
                            <a className='text-neutral-500 hover:text-white transition duration-150 ease-out md:ease-in '>
                                {icon}
                            </a>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
        <div>
            <h3 className='text-semibold text-md mb-4'>Resources</h3>
            <ul className='space-y-2'>
                {resourcesLinks.map((resources, i)=>(
                    <li key={i}>
                        <a className='text-neutral-500 text-sm hover:text-white transition duration-150 ease-out md:ease-in ' href={resources.href}>
                        {resources.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className='text-semibold text-md mb-4'>Platform</h3>
            <ul className='space-y-2'>
                {platformLinks.map((Platform, i)=>(
                    <li key={i}>
                        <a className='text-neutral-500 text-sm hover:text-white transition duration-150 ease-out md:ease-in ' href={Platform.href}>
                        {Platform.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className='text-semibold text-md mb-4'>Community</h3>
            <ul className='space-y-2'>
                {communityLinks.map((Community, i)=>(
                    <li key={i}>
                        <a className='text-neutral-500 text-sm hover:text-white transition duration-150 ease-out md:ease-in ' href={Community.href}>
                        {Community.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        </div>
        
    </footer>
  )
}

export default Footer;
