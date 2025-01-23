import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import "./App.css"
import { useRef } from "react"
import { useLocomotiveWithGsap } from "./hooks/LocomotiveWithGsap"

export default function App() {
    const containerRef = useRef(null)

    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
            }}
            conatinerRef={containerRef}
        >
            <div data-scroll-container ref={containerRef}>
                <AppContent />
            </div>
        </LocomotiveScrollProvider>
    )
}

export function AppContent() {
    useLocomotiveWithGsap()

    return (
        <div data-scroll-section className="bg-[#aaa]">
            <div data-scroll data-scroll-speed="-4" className="h-screen bg-red-500"></div>
            <div className="h-screen bg-green-500"></div>
        </div>
    )
}
