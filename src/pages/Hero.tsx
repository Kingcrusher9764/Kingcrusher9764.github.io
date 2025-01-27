import { useRef } from "react";
import useHeroLine from "../hooks/HeroLine";
import cn from "../utils/cn";

export default function Hero() {

    return (
        <section
            className="min-h-screen bg-[var(--bg-blue)] flex items-center justify-center font-[Neue]"
        >
            <div className="w-11/12 text-white flex flex-col">

                <HeroLine
                    text="Hi, I'm Vikrant Tiwari"
                    className=""
                />
                <HeroLine
                    text="A Full Stack Developer"
                    className="text-right"
                />
                <HeroLine
                    text="At Navi Mumbai, Maharashtra"
                    className=""
                />

            </div>
        </section>
    )
}

export function HeroLine({
    text, className
}: {
    text: string;
    className?: string;
}) {

    const lineRef = useRef(null)
    useHeroLine(lineRef)

    return (
        <h3 ref={lineRef} className={cn("hero-line", "text-8xl px-4 py-2 border-b-2", className)}>
            {text}
        </h3>
    )
}
