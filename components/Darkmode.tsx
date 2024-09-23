"use client"

import React, { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Btn from "./Button"

export default function ToggleDark () {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <Btn radius="10px" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun/>
      ) : (
        <Moon/>
      )}
    </Btn>
  )
}