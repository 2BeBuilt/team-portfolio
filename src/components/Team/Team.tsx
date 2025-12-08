import { profiles } from '@/utils/constants/profiles'

export default function Team() {
  return (
    <section id="team" className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="brutal-box-blue p-6 mb-12 text-center max-w-xs mx-auto">
          <h2 className="text-2xl font-black">TEAM</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {profiles.map((profile, index) => (
            <div key={index} className="group">
              <div className="brutal-box-sm p-5 md:p-6 h-full group-hover:transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0_0_#000000] transition-all duration-150">
                <div className="text-center flex flex-col h-full">
                  {profile.img ? (
                    <img
                      src={profile.img}
                      alt={profile.name}
                      className="w-full aspect-square mx-auto mb-4 border-4 border-neo-black object-cover"
                    />
                  ) : (
                    <div className="w-full aspect-square mx-auto mb-4 border-4 border-neo-black bg-neo-lime flex items-center justify-center text-5xl font-black">
                      {profile.name[0]}
                    </div>
                  )}
                  <h3 className="text-xl font-black text-neo-black">{profile.name}</h3>
                  <p className="text-sm text-neo-black mt-2 italic">"{profile.tagline}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}