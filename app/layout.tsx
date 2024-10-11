import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '../components/theme-provider';
import { ConfirmProvider } from '../components/Confirm';
import SideBar from '@/components/Sidebar';
import NavBar from '@/components/NavBar';
import LinkContent from '@/components/LinkItem';
import { ToggleDark } from '@/src';
import DarkGit from '@/public/github_dark.svg'
import LightGit from '@/public/github_light.svg'
import Image from 'next/image';
import Link from 'next/link';

const navElements = [
  <ToggleDark/>,
  <Link href={'https://github.com/201910825/ez-ui'}>
    <Image src={LightGit} width={56} alt="GitHub" className="dark:hidden" />
    <Image src={DarkGit} width={56} alt="GitHub" className="hidden dark:block" />
  </Link>,

];
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ConfirmProvider>
            <NavBar 
              items={navElements.map(element => ({ element }))}
              logo={<h2>ez-ui</h2>}
              className=""
            />
            <div className='w-full flex justify-center'>
              <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>

              <SideBar title='ez-ui'>
                <h1 className='ml-3 px-2 font-extrabold text-[24px]'>hooks</h1>
                <LinkContent to='/docs/infinitytest'>
                  <p>Infinity Scroll</p>
                </LinkContent>
                <LinkContent to='/docs/confirm'>
                  <p>Confirm</p>
                </LinkContent>
                <LinkContent to='/docs/darkmode'>
                  <p>Dark Mode</p>
                </LinkContent>
                <LinkContent to='/docs/theme-provider'>
                  <p>Theme-Provider</p>
                </LinkContent>
                <h1 className='ml-3 px-2 font-extrabold text-[24px]'>Components</h1>
                <LinkContent to='/docs/avatar'>
                  <p>Avatar</p>
                </LinkContent>
                <LinkContent  to='/docs/alertmodal'>
                  <p>Alert Modal</p>
                </LinkContent>
                <LinkContent  to='/docs/button'>
                  <p>Btn</p>
                </LinkContent>
                <LinkContent to='/docs/calendar'>
                  <p>Calendar</p>
                </LinkContent>
                <LinkContent to='/docs/form'>
                  <p>Form</p>
                </LinkContent>
                <LinkContent to='/docs/gantt'>
                  <p>Gantt Chart</p>
                </LinkContent>
                <LinkContent to='/docs/linkitem'>
                  <p>LinkItem</p>
                </LinkContent>
                <LinkContent to='/docs/modal'>
                  <p>Modal</p>
                </LinkContent>
                <LinkContent to='/docs/navbar'>
                  <p>NavBar</p>
                </LinkContent>
                <LinkContent to='/docs/scrollarea'>
                  <p>Scroll area</p>
                </LinkContent>
                <LinkContent to='/docs/sidebar'>
                  <p>SideBar</p>
                </LinkContent>
                <LinkContent to='/docs/virtualphone'>
                  <p>Virtual phone</p>
                </LinkContent>
              </SideBar>
              <div className='relative '>
                {children}
              </div>
            </div>  
            </div>
            
            </ConfirmProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}