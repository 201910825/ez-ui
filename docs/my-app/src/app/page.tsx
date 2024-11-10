'use client'

import { ThemeProvider,ConfirmProvider,ToggleDark,VirtualPhone,ScrollArea, AlertModalCancel } from "@easymean/ez-ui";
import Sub from "./sub/page";
import React from "react";
export default function Home() {

  return (
    <ThemeProvider>
      <AlertModalCancel>awefawef</AlertModalCancel>
      <ConfirmProvider>
      <ToggleDark/>
      <div className="w-screen h-screen">
        <VirtualPhone src="./file.svg" alt="" width={500} height={300} isSpin={false}/>
        <Sub></Sub>
      </div>
      <ScrollArea showScrollbar={true}>awefawef</ScrollArea>
      </ConfirmProvider>
    </ThemeProvider>
  );
}
