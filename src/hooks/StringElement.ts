import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function useStringElement() {
    const [path, setPath] = useState("M 10 40 Q 10 40 1800 40")
    const stringParentRef = useRef<HTMLDivElement>(null)
    const stringRef = useRef<SVGPathElement>(null)

    const { contextSafe } = useGSAP()

    const moveString = contextSafe((e: MouseEvent, data: DOMRect) => {
        const path = `M 10 ${data.height / 2} Q ${data.width / 2} ${e.y - data.y} ${data.width - 10} ${data.height / 2}`

        gsap.to(stringRef.current, {
            attr: { d: path },
            duration: 0.3,
            ease: "power3.out",
        })
    })

    const initialString = contextSafe((data: DOMRect) => {
        const initialPath = `M 10 ${data.height / 2} Q ${data.width / 2} ${data.height / 2} ${data.width - 10} ${data.height / 2}`

        gsap.to(stringRef.current, {
            attr: { d: initialPath },
            duration: 1.5,
            ease: "elastic.out(1,0.2)"
        })
    })

    useEffect(() => {
        const parentElem = stringParentRef.current

        if (parentElem) {
            const data = parentElem.getBoundingClientRect()

            parentElem.addEventListener("mousemove", (e) => moveString(e, data))
            parentElem.addEventListener("mouseleave", () => initialString(data))
        }

        return () => {
            if (parentElem) {
                parentElem.removeEventListener("mousemove", () => { })
                parentElem.removeEventListener("mouseleave", () => { })
            }
        }
    }, [])

    return { path, setPath, stringParentRef, stringRef }
}
