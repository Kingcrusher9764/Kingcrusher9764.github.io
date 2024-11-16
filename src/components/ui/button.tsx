import React from "react"

export interface ButtonProps {
    children: React.ReactNode;
}

export function Button1({ children }: ButtonProps) {
    return (
        <div className="relative px-6 py-2 group">
            <span className="absolute w-full h-full inset-0 -translate-x-1 -translate-y-1 border-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease"></span>
            <span className="absolute w-full h-full inset-0 translate-x-1 translate-y-1 bg-background-orange group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease"></span>
            <span className="relative">
                {children}
            </span>
        </div>
    )
}
