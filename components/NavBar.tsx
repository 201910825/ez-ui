import React from 'react'
import { cn } from '@/lib/utils'

export interface NavItem {
  element: React.ReactNode
}

export interface NavBarProps {
  items: NavItem[]
  logo?: React.ReactNode
  className?: string
}

const NavBar = ({ items, logo, className }:NavBarProps) => {
  return (
    <nav className={cn(
      "flex justify-between z-[100] items-center px-4 py-3 shadow-sm sticky top-0 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}>
      {logo && <div className="flex-shrink-0">{logo}</div>}
      <ul className="flex space-x-4">
        {items.map((item, index) => (
          <li key={index}>{item.element}</li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar