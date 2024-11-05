"use client";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Btn } from "./Button";
export default function ToggleDark() {
    var _a = useTheme(), resolvedTheme = _a.resolvedTheme, setTheme = _a.setTheme;
    var _b = useState(false), mounted = _b[0], setMounted = _b[1];
    useEffect(function () {
        setMounted(true);
    }, []);
    var toggleTheme = function () {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };
    if (!mounted)
        return null;
    return (<Btn onClick={toggleTheme}>
      {resolvedTheme === "dark" ? (<Sun />) : (<Moon />)}
    </Btn>);
}
