import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
}

interface NavBarProps {
  items: NavItem[]
  logo?: React.ReactNode
  className?: string
}

const NavBar: React.FC<NavBarProps> = ({ items, logo, className }) => {
  return (
    <nav className={cn(
      "flex justify-between z-[100] items-center px-4 py-3 bg-white shadow-sm sticky top-0",
      className
    )}>
      {logo && <div className="flex-shrink-0">{logo}</div>}
      <ul className="flex space-x-4">
        {items.map((item, index) => (
          <li key={index}>
            <Link 
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar