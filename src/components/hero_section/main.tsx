import React from "react"
import Image from "next/image"

export default function HeroSection() {
    return (
        <div className="w-full min-h-[100vh] flex flex-col md:flex-row-reverse items-center border-2">
            {/* left information section */}
            <MyIntroduction />

            {/* right section */}
            <div className="w-full md:w-1/2 md:h-full flex items-center justify-center py-4">
                <Image
                    src="/images/portfolio_bg_3.webp"
                    alt="hero_image"
                    width={100}
                    height={100}
                    className="w-[400px] md:w-full max-w-[500px] h-full object-cover"
                />
            </div>
        </div>
    )
}

export function MyIntroduction() {
    return (
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-y-4 py-4">
            {/* top heading section */}
            <div className="flex flex-col items-center md:items-start">
                <h3 className="text-[1.6rem] font-semibold px-4 py-2 rounded-lg text-foreground-orange bg-background-orange w-[max-content]">
                    Hi <span>👋</span>, I'm Vikrant
                </h3>

                <h2 className="font-semibold text-[3rem] text-center md:text-left">
                    A <span className="text-foreground-orange font-bold">Web Developer</span>.
                </h2>
            </div>

            {/* bottom description section */}
            <p className="font-[500] text-[1.3rem] text-zinc-400 text-center md:text-left px-2 md:px-0">
                I like to learn about new technology and building stuff.
            </p>
        </div>
    )
}

