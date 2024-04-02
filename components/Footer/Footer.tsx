import React from 'react'
import logo from "@/public/logo_horizontal.svg";
import Image from 'next/image';
import { GithubIcon, TwitterIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-neutral-800 shadow-inner'>
        <div className='pt-10 flex justify-center'>

        <Image src={logo} alt='logo' height={50}/>
        </div>
        <div className='text-center text-lg text-neutral-400 pb-4 w-full'>
          <p>Made in 🇧🇷</p>
        </div>
        <div className='flex justify-center py-4 gap-4'>
        <GithubIcon strokeWidth={1.5} fill="#777" color='#777' size={50} className='bg-neutral-900 rounded-full p-3' />
        <TwitterIcon strokeWidth={1.5} fill="#6ca6ec" color='#6ca6ec' size={50} className='bg-neutral-900 rounded-full p-3' />
        </div>
        <div className='w-full flex justify-center'>
        <p className='mx-auto text-xs md:text-base text-neutral-500 p-2'>Copyright @ 2024 DevoltHQ Limited </p>
        </div>
    </footer>
  )
}
