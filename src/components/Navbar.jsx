import React from 'react'

import { Link } from 'react-router-dom';
import { Avatar, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
const Navbar = () => {
  

  const navbar = [
    {"name":"Home","href":"/"},
    {"name":"My Profile","href":"/sign-in"},
    {"name":"My Kart","href":"/sign-up"},
    {"name":"About","href":"/about"},
  ]
  return (
    <div className='flex items-center justify-between py-2 px-4 shadow-md mx-auto sticky top-0'>
      <div className='mx-auto'>
        <Link to={"/"}>
        <img src='' width={125} height={40} alt='' />
        </Link>


      </div>
      <ul className='hidden sm:inline-flex gap-4 mx-auto text-sm '>
          {
            navbar.map((items) =>(
             
                  <li key={items.id}><Link to={""}>{items.name}</Link></li>
                 
            ))
          }
      </ul>
      <Button variant={"secondary"} size={"sm"} className='w-[200px] inline-flex gap-6 '>
          Search
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>


      </Button>
          <ul className='hidden sm:inline-flex gap-2 items-center capitalize text-sm mx-auto'>
            <li>
              <Link to={''}>Sign In</Link>
            </li>
            <li>
              <Link to={''}>
                <Button variant={'secondary'} size={'sm'}>Sign Up</Button>
              </Link>
            </li>
          </ul>
    </div>
  )
}

export default Navbar
