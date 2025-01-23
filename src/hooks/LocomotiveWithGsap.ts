import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import { useLocomotiveScroll } from "react-locomotive-scroll"

export function useLocomotiveWithGsap() {
    const { scroll } = useLocomotiveScroll()
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        if (scroll) {
            const elem = scroll?.el
            scroll.on("scroll", ScrollTrigger.update)

            ScrollTrigger.scrollerProxy(elem, {
                scrollTop(value) {
                    return arguments.length
                        ? scroll.scrollTo(value, 0, 0)
                        : scroll.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                },

                // follwoing line is not required to work pinning on touch screen
                pinType: elem.style.transform
                    ? "transform"
                    : "fixed"
            });
        }

        return () => {
            ScrollTrigger.addEventListener("refresh", () => scroll?.update())
            ScrollTrigger.refresh()
        }

    }, [scroll])

    return null
}
