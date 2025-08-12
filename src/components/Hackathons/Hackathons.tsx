import { hacks } from '@/utils/constants/hacks'
import { projects } from '@/utils/constants/projects'

export default function Hackathons() {
  const projectMap = projects.reduce((acc, proj) => {
    acc[proj.name] = proj
    return acc
  }, {} as Record<string, any>)
  
  return (
    <section id="hackathons" className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="brutal-box-blue p-6 mb-12 text-center max-w-md mx-auto">
          <h2 className="section-header">HACKATHONS</h2>
        </div>
        
        <div className="space-y-8">
          {hacks.map((hack, index) => {
            const projectDetails = projectMap[hack.project]
            
            return (
              <div key={index} className="group">
                <div className="brutal-box p-6 md:p-8 group-hover:transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0_0_#000000] transition-all duration-150">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      {hack.logo && (
                        <img 
                          src={hack.logo} 
                          alt={hack.name}
                          className="w-10 h-10 border-2 border-neo-black"
                        />
                      )}
                      <div>
                        <h3 className="text-xl font-black">{hack.name}</h3>
                        <p className="text-xs font-bold text-neo-black">{hack.date}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-lg font-black mb-1 text-neo-black">
                        {hack.project}
                      </p>
                      {projectDetails && (
                        <p className="text-sm line-clamp-2">
                          {projectDetails.description}
                        </p>
                      )}
                    </div>
                    
                    {hack.prizes && hack.prizes.length > 0 && (
                      <div className="space-y-1">
                        {hack.prizes.map((prize, idx) => (
                          <div key={idx} className="bg-neo-lime text-neo-black px-3 py-2 text-xs font-bold border-2 border-neo-black shadow-brutal-sm">
                            <span className="text-base mr-2">🏆</span>
                            {prize.nomination} - {prize.sponsor.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {projectDetails && projectDetails.socials && (
                    <div className="flex flex-col gap-2">
                      {projectDetails.socials.slice(0, 2).map((social: any, idx: number) => (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="brutal-button text-xs px-4 py-2 text-center"
                        >
                          {social.label}
                        </a>
                      ))}
                    </div>
                  )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}