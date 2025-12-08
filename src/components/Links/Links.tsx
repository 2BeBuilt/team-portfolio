import { socials } from '@/utils/constants/socials'

export default function Links() {
  return (
    <section id="links" className="px-4 py-20">
      <div className="max-w-3xl mx-auto w-full">
        <div className="retro-box p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8">CONNECT</h2>

          <div className="flex justify-center items-center gap-6 mb-8">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="retro-button px-6 py-4 text-center">
                  <div className="text-xl mb-1">
                    {social.label === 'Github' ? '💻' : '🌐'}
                  </div>
                  <div className="text-xs font-bold">
                    {social.label?.toUpperCase()}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t-4 border-double border-white">
            <p className="text-xs">
              © 2025 2BB TEAM
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}