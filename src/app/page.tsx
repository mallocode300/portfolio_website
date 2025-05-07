import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20 max-w-3xl mx-auto">
      {/* Profile Section */}
      <section className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
        <div className="shrink-0">
          <div className="relative w-48 h-72 md:w-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/profile-photo.jpg"
              alt="Profile"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col justify-center pt-2">
          <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            I'm Mallory, an AI Engineer.
          </h1>
          <p className="text-lg text-text-default mb-4">
            AI Engineer passionate about designing adaptive, self-learning agents that redefine human-machine collaboration. My work sits at the intersection of machine learning, deep reinforcement learning, and cognitive architectures, where I engineer AI systems that perceive, reason, and act in dynamic environments.
          </p>
          <p className="mt-4">
            <Link
              href="/contact"
              className="text-accent hover:text-accent-dark font-medium"
            >
              Get in touch →
            </Link>
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pt-8">
        <h2 className="text-2xl font-semibold text-text-dark mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              id: 1,
              title: "AI Project 1",
              description: "A comprehensive machine learning platform for predictive analytics that processes large datasets to provide actionable business insights.",
              image: "/project-1-placeholder.jpg",
            },
            {
              id: 2,
              title: "AI Project 2",
              description: "Natural language processing system that analyzes customer feedback across multiple channels to identify sentiment and key topics.",
              image: "/project-2-placeholder.jpg",
            },
            {
              id: 3,
              title: "AI Project 3",
              description: "Computer vision application that automates quality control in manufacturing by detecting defects in real-time video feeds.",
              image: "/project-3-placeholder.jpg",
            },
            {
              id: 4,
              title: "AI Project 4",
              description: "Recommendation engine for an e-commerce platform that increased conversion rates by 32% through personalized product suggestions.",
              image: "/project-3-placeholder.jpg",
            },
          ].map((project) => (
            <div key={project.id} className="group">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-primary-dark">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-text-dark mb-2 group-hover:text-accent">
                {project.title}
              </h3>
              <p className="text-text-default mb-3">
                {project.description}
              </p>
              <Link
                href={`/projects/${project.id}`}
                className="text-accent hover:text-accent-dark font-medium"
              >
                View Project →
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/projects" className="text-accent hover:text-accent-dark font-medium">
            See All Projects →
          </Link>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="pt-8">
        <h2 className="text-2xl font-semibold text-text-dark mb-8">Latest Posts</h2>
        <div className="space-y-8">
          {[
            {
              id: 1,
              title: "Understanding Large Language Models",
              excerpt: "A deep dive into how LLMs work and their impact on natural language processing...",
              date: "April 15, 2024",
            },
            {
              id: 2,
              title: "The Future of AI in Healthcare",
              excerpt: "Exploring how artificial intelligence is revolutionizing healthcare delivery and patient care...",
              date: "March 28, 2024",
            },
            {
              id: 3,
              title: "Ethical Considerations in AI Development",
              excerpt: "Examining the ethical implications of AI systems and how to build responsible AI...",
              date: "March 10, 2024",
            },
          ].map((post) => (
            <article key={post.id} className="pb-8 border-b border-primary-dark last:border-0">
              <h3 className="text-xl font-medium text-text-dark mb-2 hover:text-accent">
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-text-default mb-3">
                {post.excerpt}
              </p>
              <div className="text-sm text-text-light">
                {post.date}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/blog" className="text-accent hover:text-accent-dark font-medium">
            See All Posts →
          </Link>
        </div>
      </section>
    </div>
  );
}
