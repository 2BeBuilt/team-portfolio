import { profiles } from '@/utils/constants/profiles'

export default function Team() {
  return (
    <section id="team" className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="brutal-box-blue p-6 mb-12 text-center max-w-md mx-auto">
          <h2 className="section-header">TEAM</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <div key={index} className="group">
              <div className="brutal-box-sm p-6 group-hover:transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0_0_#000000] transition-all duration-150">
              <div className="text-center">
                {profile.img ? (
                  <img 
                    src={profile.img} 
                    alt={profile.name}
                    className="w-24 h-24 mx-auto mb-4 border-4 border-neo-black"
                  />
                ) : (
                  <div className="w-24 h-24 mx-auto mb-4 bg-neo-lime text-neo-black flex items-center justify-center text-3xl font-bold border-4 border-neo-black">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                
                <h3 className="text-xl font-black mb-1">{profile.name}</h3>
                <p className="text-sm mb-4 font-bold text-neo-blue">{profile.title}</p>
                
                <p className="text-xs mb-4 line-clamp-4 leading-relaxed">
                  {profile.summary}
                </p>
                
                <div className="flex gap-2 flex-wrap justify-center">
                  {profile.socials.slice(0, 2).map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-neo-lime text-neo-black text-xs font-bold hover:bg-neo-yellow border-2 border-neo-black transition-all hover:shadow-brutal-sm"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}