import TitleBox from "../components/TitleBox"

export default function Skills() {
    return (
        <section
            className="min-h-screen bg-[var(--bg-blue)] font-[Neue] flex items-center justify-center"
        >
            <div className="w-11/12">
                <TitleBox title={"Skills"} />

                <div className="flex flex-row flex-wrap justify-start gap-[10px] border-2 border-green-500 p-4 rounded-xl">

                    <SkillBox skillName="Node.js" skillImage="/icons/nodejs.png" />
                    <SkillBox skillName="React" skillImage="/icons/react.png" />
                    <SkillBox skillName="Next.Js" skillImage="/icons/nextjs.png" />
                    <SkillBox skillName="Django" skillImage="/icons/django.png" />
                    <SkillBox skillName="MongoDB" skillImage="/icons/mongodb.png" />
                    <SkillBox skillName="PostgreSQL" skillImage="/icons/postgresql.png" />
                    <SkillBox skillName="Docker" skillImage="/icons/docker.png" />
                    <SkillBox skillName="Redux" skillImage="/icons/redux.png" />
                    <SkillBox skillName="Git" skillImage="/icons/git.png" />
                    <SkillBox skillName="GitHub" skillImage="/icons/github.png" />
                    <SkillBox skillName="HTML" skillImage="/icons/html.png" />
                    <SkillBox skillName="CSS" skillImage="/icons/css.png" />
                    <SkillBox skillName="Javascript" skillImage="/icons/javascript.png" />
                    <SkillBox skillName="Python" skillImage="/icons/python.png" />

                </div>
            </div>
        </section>
    )
}

export function SkillBox({ skillName, skillImage }: { skillName: string; skillImage: string; }) {
    return (
        <div className="w-[max-content]">
            <div className="bg-blue-400 rounded-xl p-2 w-[120px] h-[120px] flex items-center justify-center">
                <img
                    src={skillImage}
                    alt={skillName}
                    className="h-full"
                />
            </div>

            <div className="text-center mt-4 text-3xl">{skillName}</div>
        </div>
    )
}
