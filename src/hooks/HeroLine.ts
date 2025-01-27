import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect } from "react"


export default function useHeroLine(lineref: React.MutableRefObject<null>) {
    const { contextSafe } = useGSAP()

    const LineAnimation = contextSafe(() => {

        gsap.from(lineref.current, {
            y: 120,
            duration: 0.3,
        })

    })

    useEffect(() => {
        LineAnimation()
    }, [])
}
