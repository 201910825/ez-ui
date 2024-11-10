'use client'

import Image from "next/image";
import { Btn, ThemeProvider, ToggleDark, VirtualPhone,ConfirmProvider } from "../../dist/cjs/index";
import '../../dist/index.css'
export default function Home() {
  return (
    <ThemeProvider>
      <ConfirmProvider>
      <ToggleDark/>
      <div className="w-screen h-screen">
        <VirtualPhone src="./file.svg" alt="" width={500} height={300}/>
        <Btn className="bg-slate-500">awefawef</Btn>
      </div>
      </ConfirmProvider>
    </ThemeProvider>
  );
}
