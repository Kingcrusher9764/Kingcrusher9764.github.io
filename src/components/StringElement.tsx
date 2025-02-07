import cn from "../utils/cn";
import useStringElement from "../hooks/StringElement";

export default function StringElement({
    className
}: {
    className?: string;
}) {
    const { path, stringParentRef, stringRef } = useStringElement()

    return (
        <div
            className={cn("w-full", className)}
            ref={stringParentRef}
        >
            <svg className="w-full h-[50px] md:h-[80px]">
                <path
                    ref={stringRef}
                    d={path}
                    stroke="black"
                    fill="transparent"
                />
            </svg>
        </div>
    )
}
