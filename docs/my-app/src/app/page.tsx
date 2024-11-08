'use client'
import Image from "next/image";
import {Btn, ThemeProvider, ToggleDark} from '@easymean/ez-ui'

export default function Home() {
  return (
    <ThemeProvider>
      <ToggleDark />
      <div className="w-screen h-screen">
        <Btn>awefawef</Btn>
      </div>
    </ThemeProvider>
  );
}
