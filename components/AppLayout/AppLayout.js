import { useUser } from '@auth0/nextjs-auth0/client';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../Logo/Logo';

export default function Layout({children,...rest}) {
    const {user} = useUser();
    console.log("APP PROPS: ", rest)
  return (
    <div className='grid grid-cols-[300px_1fr] h-screen max-h-screen'>
        <div className='flex flex-col text-white overflow-hidden'>
         <div className='bg-slate-800 px-2'>
            <Logo />
            <Link href="/post/new" className='btn'>
                New post
            </Link>
            <Link href="/token-topup" className='block mt-2 text-center'>
                <FontAwesomeIcon icon={faCoins} className='text-yellow-500' />
                <span className='pl-1'>0 available tokens</span>
            </Link>
         </div>
         <div className='flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800'>list of posts</div>
         <div className='bg-cyan-800 flex items-center gap-2 border-t border-t-black/50 h-20 px-2'>
         {user ? (
        <>
        <div className='min-w-[50px]'>
          <Image src={user.picture} alt={user.name} height={50} width={50} className='rounded-full' /> 
        </div>
        <div className='flex-1'>
        <div className='font-bold'>{user.email}</div>
        <Link className="text-sm" href="/api/auth/logout">Logout</Link> 
        </div>
        
        </>
      ) : (
        <Link href="/api/auth/login">Login</Link>
      
      )}
         </div>
        </div>
        
      {children}
        
    </div>
  )
}
