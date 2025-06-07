import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <Hero />
      <section className="py-10 px-4 md:px-10">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="AI PR Reviewer"
            description="Multi-agent AI that reviews pull requests using LangGraph and GitHub Actions."
            link="https://github.com/snigdhasingh/ai-pr-reviewer"
          />
          <ProjectCard
            title="Kafka + LLM Monitor"
            description="Real-time log processing with Kafka, Docker, and OpenAI for anomaly detection."
            link="https://github.com/snigdhasingh/kafka-llm-monitor"
          />
          <ProjectCard
            title="Portfolio Website"
            description="You're looking at it! Built with Next.js, Tailwind, and CI/CD."
            link="#"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
