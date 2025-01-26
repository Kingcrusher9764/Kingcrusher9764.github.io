export default function TitleBox({ title }: { title: string; }) {

    return (
        <div className="text-4xl w-[max-content] px-4 py-2 text-white font-[Neue]">
            {title}
        </div>
    )
}
