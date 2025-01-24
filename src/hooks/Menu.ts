import { useState } from "react";

export function useMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return { isOpen, toggleMenu }
}
