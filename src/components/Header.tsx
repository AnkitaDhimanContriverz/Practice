import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='bg-slate-500 p-3 flex justify-between'>
        <span className='text-2xl  text-white font-serif '>
        Countries Explorer
        </span>
        <div className='flex'>      
            <Link className='text-white underline hover:text-xl px-2' href={'/'}>HOME</Link>
            <Link className='text-white underline hover:text-xl px-2' href={'/login'}>LOGIN</Link>
        </div>
        </div>
  )
}
