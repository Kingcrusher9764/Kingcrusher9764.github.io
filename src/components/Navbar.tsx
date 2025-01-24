import { useMenu } from "../hooks/Menu"
import CloseIcon from "../icons/Close"
import MenuIcon from "../icons/Menu"

export default function Navbar() {
    return (
        <nav className="z-[99] fixed top-0 left-0 w-full flex items-center justify-between p-5">
            <h1 className="text-5xl font-[Neue] font-[300] text-[#302c1a]">VIKRANT</h1>

            <MenuSection />
        </nav>
    )
}

export function MenuSection() {
    const { isOpen, toggleMenu } = useMenu()

    return (
        <div className="">
            <div onClick={toggleMenu} className="bg-white rounded-lg w-[60px] h-[60px] cursor-pointer p-3 absolute right-[20px] top-[10px] z-[100]">
                {isOpen
                    ? <CloseIcon />
                    : <MenuIcon />
                }
            </div>

            {isOpen && <MenuBox />}
        </div>
    )
}

export function MenuBox() {
    return (
        <div className="absolute top-0 left-0 w-full h-screen pt-[30px]">
            <div className="bg-[#dfded9] h-full rounded-xl p-3">
                <div className="bg-[#bcbbb4] w-full h-full p-3 rounded-xl text-[#302c1a] inset-shadow-[35px_60px_50px_20px_rgba(24,23,13,.5)]">

                    <h2 className="font-[Monoton] text-6xl lg:text-8xl py-6">VIKRANT TIWARI</h2>

                    <ul className="font-[Monoton] text-4xl list-disc pl-8">
                        <li>Home</li>
                        <li>About</li>
                        <li>Skill</li>
                        <li>Projects</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
