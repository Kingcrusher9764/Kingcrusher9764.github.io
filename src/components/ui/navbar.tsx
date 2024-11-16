import React from "react"

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full h-[70px] border-2 border-green-600 px-4">
            <div className="w-full h-full flex items-center justify-between">
                <div>Logo</div>

                <div>Menu</div>
            </div>
        </nav>
    )
}
