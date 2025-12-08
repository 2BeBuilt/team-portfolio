import { projects } from '@/utils/constants/projects'

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="brutal-box-blue p-6 mb-12 text-center max-w-md mx-auto">
          <h2 className="section-header">PROJECTS</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="brutal-box-sm p-6 md:p-8 group-hover:transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0_0_#000000] transition-all duration-150">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1 text-neo-black">{project.name}</h3>
                  {project.backers && project.backers.length > 0 && (
                    <div className="text-xs font-bold bg-neo-lime text-neo-black inline-block px-2 py-1 mt-1">
                      💰 {project.backers[0].name}
                    </div>
                  )}
                </div>
                {project.img ? (
                  <img 
                    src={project.img} 
                    alt={project.name}
                    className="w-10 h-10 border-2 border-neo-black ml-3"
                  />
                ) : (
                  <div className="w-10 h-10 border-2 border-neo-black ml-3 bg-neo-lime flex items-center justify-center text-xs font-black">
                    {project.name.substring(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              
              <p className="text-sm text-neo-black mb-4 line-clamp-3 leading-relaxed font-medium">
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