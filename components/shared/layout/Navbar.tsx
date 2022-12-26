import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
   const [nav, setNav] = useState(false);
   const [color, setColor] = useState('transparent');
   const [textColor, setTextColor] = useState('white');
   const [navColor, setNavColor] = useState('#000000');
   
   const handleNav = () => {
      setNav(!nav);
   };

   useEffect(() => {
      const changeColor = () => {
         if(window.scrollY >= 90){
            setColor('#ffffff');
            setTextColor('#000000');
            setNavColor('#ffffff');
         }else{
            setColor('transparent');
            setTextColor('white');
            setNavColor('#000000');
         }
      }
      window.addEventListener('scroll', changeColor)
   }, []);

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <Link href='/'>
                <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>BΓE</h1>
            </Link>
            <ul style={{color: `${textColor}`}} className='hidden desktop:flex'>
                <li className='p-4'>
                   <Link href='/'>HOME</Link>
                </li>
                <li className='p-4'>
                   <Link href='/who-we-are'>WHO WE ARE</Link>
                </li>
                <li className='p-4'>
                   <Link href='/rush'>RUSH</Link>
                </li>
                <li className='p-4'>
                   <Link href='/our-house'>OUR HOUSE</Link>
                </li>
                <li className='p-4'>
                   <Link href='/news'>NEWS</Link>
                </li>
                <li className='p-4'>
                   <Link href='/contact'>CONTACT US</Link>
                </li>
            </ul>

            <div onClick={handleNav} className='block desktop:hidden z-10'>
               {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
            </div>
            <div style={{backgroundColor: `${navColor}`}} className={nav ? 'desktop:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'desktop:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
            <ul style={{color: `${textColor}`}}>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                   <Link href='/pages'>HOME</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                   <Link href='/pages'>WHO WE ARE</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                   <Link href='/pages'>RUSH</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                   <Link href='/pages'>OUR HOUSE</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                   <Link href='/pages'>NEWS</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                   <Link href='/pages'>CONTACT US</Link>
                </li>
            </ul>
            </div>
         </div>
      </div>
            
  )
}

export default Navbar