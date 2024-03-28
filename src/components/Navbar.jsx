import React from 'react'

import { Link } from 'react-router-dom';
import { Avatar, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
const Navbar = () => {
  

  const navbar = [
    {"name":"Home","href":"/"},
    {"name":"Sign In","href":"/sign-in"},
    {"name":"Sign Up","href":"/sign-up"},
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} size={"sm"}>
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' />
      </Avatar>
      </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          My Kart
        </DropdownMenuItem>
        <DropdownMenuItem>
          About
        </DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Navbar
