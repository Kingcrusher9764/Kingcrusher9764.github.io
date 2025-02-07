import TitleBox from "../components/TitleBox";

export default function About() {
    return (
        <section
            className="min-h-screen bg-[var(--bg-blue)] flex items-center justify-center"
        >
            <div className="w-11/12 space-y-4">
                <TitleBox title="About" />
                <p className="font-[Neue] px-6 text-[var(--text-blue)] text-5xl md:text-6xl">
                    I began learning to code during my first year of college. And ever since, I code every day. My passion for code grows with each line of code I create. The satisfaction of writing my own code and fixing a bug that has been bothering me for a few days are two things I cherish. I enjoy writing code to solve problems.
                </p>
            </div>
        </section>
    )
}
