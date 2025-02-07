import TitleBox from "../components/TitleBox"

export default function Skills() {
    return (
        <section
            className="min-h-screen bg-[var(--bg-blue)] font-[Neue] flex items-center justify-center"
        >
            <div className="w-11/12">
                <TitleBox title={"Skills"} />

                <div className="grid grid-cols-[repeat(auto-fill,_minmax(120px,_auto))] justify-items-center gap-[10px]  p-4">

                    <SkillBox skillName="Node.js" skillImage="/icons/nodejs.png" url="https://nodejs.org/en" />
                    <SkillBox skillName="React" skillImage="/icons/react.png" url="https://react.dev/" />
                    <SkillBox skillName="Next.Js" skillImage="/icons/nextjs.png" url="https://nextjs.org/" />
                    <SkillBox skillName="Django" skillImage="/icons/django.png" url="https://www.djangoproject.com/" />
                    <SkillBox skillName="MongoDB" skillImage="/icons/mongodb.png" url="https://www.mongodb.com/" />
                    <SkillBox skillName="PostgreSQL" skillImage="/icons/postgresql.png" url="https://www.postgresql.org/" />
                    <SkillBox skillName="Docker" skillImage="/icons/docker.png" url="https://www.docker.com/" />
                    <SkillBox skillName="Redux" skillImage="/icons/redux.png" url="https://redux-toolkit.js.org" />
                    <SkillBox skillName="Git" skillImage="/icons/git.png" url="https://git-scm.com/" />
                    <SkillBox skillName="GitHub" skillImage="/icons/github.png" url="https://www.github.com" />
                    <SkillBox skillName="HTML" skillImage="/icons/html.png" url="https://developer.mozilla.org/en-US/docs/Web/HTML" />
                    <SkillBox skillName="CSS" skillImage="/icons/css.png" url="https://developer.mozilla.org/en-US/docs/Web/CSS" />
                    <SkillBox skillName="Javascript" skillImage="/icons/javascript.png" url="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
                    <SkillBox skillName="Python" skillImage="/icons/python.png" url="https://www.python.org/" />

                </div>
            </div>
        </section>
    )
}

export function SkillBox({
    skillName, skillImage, url,
}: {
    skillName: string;
    skillImage: string;
    url?: string;
}) {
    return (
        <a
            target="_blank"
            href={url}
            className="w-[max-content]"
        >
            <div
                className="bg-[var(--skill-bg)] rounded-xl p-2 w-[120px] h-[120px] flex items-center justify-center shadow-[5px_5px_5px_5px_rgba(24,23,13,.5)] hover:shadow-none transition-all duration-300 ease"
            >
                <img
                    src={skillImage}
                    alt={skillName}
                    className="h-full"
                />
            </div>

            <div className="text-center mt-4 text-3xl text-[var(--text-blue)]">{skillName}</div>
        </a>
    )
}
