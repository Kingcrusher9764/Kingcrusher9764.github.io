import React from "react"
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Gmail from "../icons/Gmail";
import cn from "../utils/cn";

export default function Footer() {
    return (
        <footer className="bg-[var(--bg-blue)]">
            <div>
                <div className="font-[Neue]">
                    <div className="flex flex-col sm:flex-row items-center justify-between">

                        <ContactLink
                            link="https://github.com/Kingcrusher9764"
                            label="Github"
                        >
                            <Github />
                        </ContactLink>

                        <ContactLink
                            link="https://linkedin.com/in/vikrant_tiwari9764"
                            label="Linkedin"
                        >
                            <Linkedin />
                        </ContactLink>

                        <ContactLink
                            link="mailto:tiwarivikrant9764@gmail.com"
                            label="Gmail"
                        >
                            <Gmail />
                        </ContactLink>

                    </div>
                </div>

                <div className="text-center p-4">
                    COPYRIGHT &copy;, Vikrant Tiwari All rights reserved
                </div>
            </div>
        </footer>
    )
}

export function ContactLink({
    children, link, label, className,
}: {
    children: React.ReactNode;
    link: string;
    label: string;
    className?: string;
}) {
    return (
        <a
            href={link}
            className={cn(
                "flex gap-2 items-center justify-between w-full p-4 border-2",
                className
            )}
        >
            <div className="w-[40px] h-[40px]">
                {children}
            </div>

            <div className="text-4xl">
                {label}
            </div>
        </a>
    )
}
