import React from 'react'
import logo from "@/public/logo_horizontal.svg";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-neutral-800 shadow-inner'>
        <div className='p-10 flex justify-center'>

        <Image src={logo} alt='logo' height={50}/>
        </div>
        <div className='w-full flex justify-center'>
        <p className='mx-auto text-neutral-500 p-2'>Copyright @ 2024 DevoltHQ Limited </p>
        </div>
    </footer>
  )
}
