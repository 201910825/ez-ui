'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
export default function page({children}:{children : React.ReactNode}) {
  const pathname = usePathname()

  const isSpecificSubPath = pathname.startsWith('/docs')
  return (
    <div className={`relative ${isSpecificSubPath ? '' : ''}`}>
      {children}
    </div>
  )
}
