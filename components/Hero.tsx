export default function Hero() {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Snigdha Singh
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        AI + DevOps • Kafka • LLMs • CI/CD • Containers
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/snigdhasingh"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
        >
          GitHub
        </a>
        <a
          href="/Snigdha_Resume.pdf"
          download
          className="border border-black text-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
