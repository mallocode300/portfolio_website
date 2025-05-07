import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-text-dark mb-6">About Me</h1>
        <p className="text-xl text-text-default">
          AI Engineer passionate about creating innovative solutions and pushing the boundaries of artificial intelligence.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96">
          <Image
            src="/about-picture.jpeg"
            alt="About Me"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-text-dark">My Journey</h2>
          <p className="text-text-default">
            With a strong background in computer science and a passion for artificial intelligence,
            I've dedicated my career to developing cutting-edge AI solutions. My expertise spans
            machine learning, deep learning, and natural language processing.
          </p>
          <p className="text-text-default">
            I believe in creating AI systems that are not only powerful but also ethical and
            beneficial to society. My work focuses on developing practical applications that
            solve real-world problems while advancing the field of artificial intelligence.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-text-dark mb-6">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            'Machine Learning',
            'Deep Learning',
            'Natural Language Processing',
            'Computer Vision',
            'Neural Networks',
            'Python',
            'TensorFlow',
            'PyTorch',
            'Data Analysis',
            'AI Ethics',
            'Cloud Computing',
            'Research'
          ].map((skill) => (
            <div
              key={skill}
              className="bg-primary-dark p-4 rounded-lg shadow-sm text-center"
            >
              <span className="text-text-default">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-text-dark mb-6">Education & Experience</h2>
        <div className="space-y-6">
          <div className="bg-primary-dark p-6 rounded-lg shadow-sm">
            {/* <h3 className="text-xl font-semibold text-text-dark mb-2">
              Senior AI Engineer
            </h3>
            <p className="text-text-default mb-2">Tech Company • 2020 - Present</p>
            <p className="text-text-default">
              Leading AI initiatives and developing innovative solutions for complex problems.
            </p>
          </div>
          <div className="bg-primary-dark p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-text-dark mb-2">
              Master's in Computer Science
            </h3>
            <p className="text-text-default mb-2">University Name • 2018 - 2020</p>
            <p className="text-text-default">
              Specialized in Artificial Intelligence and Machine Learning.
            </p> */}
          </div>
        </div>
      </section>
    </div>
  )
} 