import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import "./App.css"
import "./Locomotive.css"
import { useRef } from "react"
import { useLocomotiveWithGsap } from "./hooks/LocomotiveWithGsap"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Hero from "./pages/Hero"
import Skills from "./pages/Skills"
import Footer from "./pages/Footer"

export default function App() {
    const containerRef = useRef(null)

    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
            }}
            watch={[]}
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
        <div>
            <Navbar />
            <div data-scroll-section className="bg-[#aaa]">
                <Hero />
                <About />
                <Skills />
                <Footer />
            </div>
        </div>
    )
}
