import TitleBox from "../components/TitleBox"

export default function Skills() {
    return (
        <section
            className="h-screen bg-[var(--bg-blue)] font-[Neue] flex items-center justify-center"
        >
            <div className="w-11/12">
                <TitleBox title={"Skills"} />

                <div>
                    <SkillBox skillName="Node.js" skillImage="" />
                </div>
            </div>
        </section>
    )
}

export function SkillBox({ skillName, skillImage }: { skillName: string; skillImage: string; }) {
    return (
        <div className="border-2 border-red-500">
            <img
                src={skillImage}
                alt={skillName}
            />
            <div>{skillName}</div>
        </div>
    )
}
