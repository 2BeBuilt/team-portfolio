import { projects } from '@/utils/constants/projects'

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="brutal-box-blue p-6 mb-12 text-center max-w-xs mx-auto">
          <h2 className="text-2xl font-black">PROJECTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="brutal-box-sm p-6 group-hover:transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0_0_#000000] transition-all duration-150 h-full">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-neo-black">{project.name}</h3>
                    {project.backers && project.backers.length > 0 && (
                      <div className="text-xs font-bold bg-neo-lime text-neo-black inline-block px-2 py-1 mt-2">
                        💰 {project.backers[0].name}
                      </div>
                    )}
                  </div>
                  {project.img && (
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-12 h-12 border-2 border-neo-black ml-3 object-cover"
                    />
                  )}
                </div>

                <p className="text-sm text-neo-black mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.socials && project.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutal-button text-xs"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}