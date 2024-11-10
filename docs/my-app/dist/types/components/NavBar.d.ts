import React from 'react';
export interface NavItem {
    element: React.ReactNode;
}
export interface NavBarProps {
    items: NavItem[];
    logo?: React.ReactNode;
    className?: string;
}
declare const NavBar: ({ items, logo, className }: NavBarProps) => React.JSX.Element;
export default NavBar;
