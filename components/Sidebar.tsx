'use client'
import { cn } from '@/docs/lib/utils'
import React from 'react'
import ScrollArea from './ScrollArea'

export interface SideBarProps {
  title : string
  className ?: string 
  children ?: React.ReactNode
}

export default function SideBar({title='title', children ,className, ...props}:SideBarProps) {
  return (
    <aside className={cn("sticky left-0 top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block",className)} {...props}>
      <ScrollArea className="border-none flex justify-center w-full h-[500px]" showScrollbar = {true} barColor='blue'>
        {children}
      </ScrollArea>
    </aside>
  )
}
