interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition block"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="text-blue-500 hover:underline">View Project →</span>
    </a>
  );
}
