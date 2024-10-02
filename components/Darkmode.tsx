"use client"

import React, { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Btn } from "./Button"

export default function ToggleDark() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <Btn onClick={toggleTheme}>
      {resolvedTheme === "dark" ? (
        <Sun />
      ) : (
        <Moon />
      )}
    </Btn>
  )
}